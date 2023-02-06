# Open AI CLI

GitHub CLI
```ai``` is Open AI on the command line. It brings the power of ai generated code to your terminal, allowing you to quickly and easily generate code from the command line without ever leaving your terminal and getting distracted by the web.

## Installation
```
npm install -g ai
```

## Usage
```
ai -p 'Here is a prompt.' -o generated.txt
```

## Parameters

- `--prompt -p` - The prompt to use for the prompt. **Required**.

- `--output -o` - The name of the file to save the prompt to. Defaults to `generated.txt`. You can also pass the path to a directory to save the prompt.