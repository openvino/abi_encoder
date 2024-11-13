# Encode ABI Tokens

This script helps generate ABI-encoded constructor arguments for Etherscan verification. It is particularly useful if you need to verify multiple tokens with different constructor arguments. The program prompts the user for the necessary details, including the ABI filename, token name, token symbol, and token cap.

## Features
- Prompts user for required inputs, making the process interactive.
- Pads the token cap with 18 zeros automatically to match the standard ERC20 format.
- Encodes constructor arguments based on a provided ABI file.

## Prerequisites
- Node.js installed (v16+ recommended)

## Installation
1. Clone or download this repository.
2. Navigate to the project directory.
3. Install dependencies (if any are required for your project).

```bash
npm install
```

## Usage
1. Make sure you have the ABI file for your token. The ABI file should be in JSON format and should include the constructor definition.
2. Run the script:

```bash
node encodeArguments.mjs
```

3. You will be prompted to enter the following information:
   - **ABI Filename**: The path to the ABI file (e.g., `mtb.abi`).
   - **Token Name**: The name of the token (e.g., `MikeTangoBravo18`).
   - **Token Symbol**: The symbol for the token (e.g., `MTB18`).
   - **Token Cap**: The number of tokens for the cap (e.g., `16384`). The program will automatically pad this value with 18 zeros.

4. The script will then output the ABI-encoded constructor arguments, which can be used for Etherscan verification.

## Example
```bash
Enter the ABI filename (e.g., mtb.abi): mtb.abi
Enter the token name (e.g., MikeTangoBravo18): MikeTangoBravo18
Enter the token symbol (e.g., MTB18): MTB18
Enter the number of tokens for the cap (e.g., 16384): 16384
Encoded ABI Arguments: 0x...
```

## Notes
- Ensure that the ABI file is correctly formatted in JSON and contains the constructor details.
- The encoded ABI arguments will be displayed with an "0x" prefix. When pasting into Etherscan, you may need to remove this prefix.

## License
This project is licensed under the MIT License.

