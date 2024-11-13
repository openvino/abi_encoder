import fs from 'fs';
import readline from 'readline';
import { AbiCoder } from 'ethers';

// Create a readline interface to prompt user for inputs
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to ask a question and return the answer as a promise
const askQuestion = (query) => {
  return new Promise((resolve) => {
    rl.question(query, (answer) => resolve(answer));
  });
};

(async () => {
  try {
    // Step 1: Get inputs from the user
    const abiFilename = await askQuestion('Enter the ABI filename (e.g., mtb.abi): ');
    const tokenName = await askQuestion('Enter the token name (e.g., MikeTangoBravo18): ');
    const tokenSymbol = await askQuestion('Enter the token symbol (e.g., MTB18): ');
    const tokenCapInput = await askQuestion('Enter the number of tokens for the cap (e.g., 16384): ');

    // Step 2: Pad the cap value with 18 zeros
    const tokenCap = `${tokenCapInput}${'0'.repeat(18)}`;

    // Step 3: Read the ABI file
    const abi = JSON.parse(fs.readFileSync(abiFilename, 'utf8'));

    // Step 4: Find the constructor ABI item
    const constructorAbi = abi.find(item => item.type === 'constructor');

    if (!constructorAbi) {
      console.error('No constructor found in the ABI.');
      process.exit(1);
    }

    // Step 5: Get the input types from the constructor ABI
    const inputTypes = constructorAbi.inputs.map(input => input.type);

    // Step 6: Define constructor arguments
    const constructorArgs = [
      tokenName,  // Name
      tokenSymbol, // Symbol
      tokenCap     // Cap
    ];

    // Step 7: Use AbiCoder to encode the arguments
    const abiCoder = new AbiCoder();
    const abiEncodedArguments = abiCoder.encode(inputTypes, constructorArgs);
    console.log('Encoded ABI Arguments:', abiEncodedArguments);
  } catch (error) {
    console.error('Error:', error);
  } finally {
    rl.close();
  }
})();

