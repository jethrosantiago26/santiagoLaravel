<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Art Portfolio</title>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Nunito', sans-serif;
            background: linear-gradient(135deg, #f7fafc 0%, #e2e8f0 100%);
            margin: 0;
            min-height: 100vh;
        }
        #root {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        .container {
            max-width: 700px;
            margin: 3rem auto;
            background: #fff;
            padding: 2.5rem 2rem;
            border-radius: 16px;
            box-shadow: 0 4px 24px rgba(0,0,0,.10);
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        h1 {
            margin-top: 0;
            font-size: 2.5rem;
            color: #2d3748;
            text-align: center;
        }
        p {
            color: #4a5568;
            text-align: center;
            font-size: 1.15rem;
        }
    </style>
</head>
<body>
    <div id="root"></div>
    <script src="/js/app.js"></script>
</body>
</html>
