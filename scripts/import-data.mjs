import { createClient } from '@sanity/client';
import fetch from 'node-fetch';
// require('dotenv').config();


// Initialize Sanity client
const client = createClient({
  projectId: "z3bmnk0j",
  dataset: "production",
  useCdn: false, // Set to true if you want faster reads
  apiVersion: '2021-10-21',
  token: "skSpVBm37J2HnKYqSb1a3mkJ59pRyAVx8y5wKD0cLO7LIZBbi6882EqItwdlrtniOQaiVC5YpHNGm6nQtNVwLQeqhrhN98Dx6SfCrzpITZIMIk5SlGX9n2kOgqCPpiUARcobVGfjVXdTfAa3OlPJuogV07iKVKUXwH0H4mu7aFlmIcqm5D9S", // Replace with your Sanity token
});

// Function to upload an image to Sanity
async function uploadImageToSanity(imageUrl) {
  try {
    console.log(`Uploading image: ${imageUrl}`);

    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${imageUrl}`);
    }

    const buffer = await response.arrayBuffer();
    const bufferImage = Buffer.from(buffer);

    const asset = await client.assets.upload('image', bufferImage, {
      filename: imageUrl.split('/').pop(),
    });

    console.log(`Image uploaded successfully: ${asset._id}`);
    return asset._id;
  } catch (error) {
    console.error('Failed to upload image:', imageUrl, error);
    return null;
  }
}

// Function to upload a single product to Sanity
async function uploadProduct(product) {
  try {
    const imageId = await uploadImageToSanity(product.imagePath);

    if (imageId) {
      const document = {
        _type: 'product',
        id: product.id,
        name: product.name,
        slug: {
          _type: 'slug',
          current: product.name,
        },
        price: parseFloat(product.price), // Ensure the price is a number
        image: {
          _type: 'image',
          asset: {
            _ref: imageId,
          },
        },
        quantity: 0,
        description: product.description,
     
      };

      const createdProduct = await client.create(document);
      console.log(`Product "${product.name}" uploaded successfully:`, createdProduct);
    } else {
      console.log(`Product "${product.name}" skipped due to image upload failure.`);
    }
  } catch (error) {
    console.error('Error uploading product:', error);
  }
}

// Function to fetch products from the provided API and upload them to Sanity
async function migrateProducts() {
  try {
    const response = await fetch('https://template-0-beta.vercel.app/api/product');

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const products = await response.json();

    for (const product of products) {
      await uploadProduct(product);
    }
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}

// Start the migration
migrateProducts();