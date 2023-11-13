# MMSPIN Wheel For your website

## Step 1: Obtain API Keys


You will need the following API keys:

- `campaign-api-key`: Your campaign API key.
- `client-api-key`: Your client API key.

## Step 2: Include Stylesheet and JavaScript

Add the following lines to the `<head>` section of your HTML document:

```sh
<link rel="stylesheet" href="https://plugin.mickhae.com/mmspin.min.css" />
```

Add the following lines to the `<body>` section of your HTML document:

```sh 
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script type="module" src="https://plugin.mickhae.com/mmspin.min.js"></script>
```


## Step 2: Integrate the Plugin

```sh
<div
    id="main"
    data-api-key="YOUR_CLIENT_API_KEY"
    data-campaign-api-id="YOUR_CAMPAIGN_API_ID"
></div>
```

# Spin Page HTML Example

```sh
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
        />
        <title>Spin Page</title>
        <link rel="stylesheet" href="https://plugin.mickhae.com/mmspin.min.css" />
    </head>
    <body>
        <div
            id="main"
            data-api-key="YOUR_CLIENT_API_KEY"
            data-campaign-api-id="YOUR_CAMPAIGN_API_ID"
        ></div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
        <script type="module" src="https://plugin.mickhae.com/mmspin.min.js"></script>
    </body>
</html> 
```
