# OBS
Okulumuz İzmir Ekonomi Üniversitesi'nin zayıf bir öğrenci bilgilendirme sistemine geçmesi sonucu biz Ekonomi Bilgisayar Mühendisliği öğrencileri olarak kendi öğrenci sistemimizi kendimiz yapmaya karar verdik. 

## Seting up Backend 
After cloning the development brench go to backend directory with

```
    cd backend
```

First think to do is creating .venv file. Write this code to the terminal (Windows)

```
    python -m venv .venv
```
If you are using macOS so you should write:

```
    python3 -m venv .venv
```

After you create the .venv file you are going to activate it

```
    # Activate the virtual environment
    # On Windows:
    .\venv\Scripts\activate
    # On macOS/Linux:
    source venv/bin/activate
```

Now you good to go to install django on you virtual environment by running:

```
    pip install django
```

Check if django is installed
```
    django-admin --version
```

To start the project run
```
     python managa.py runserver
```

And to make migrations
```
     python managa.py migrate
```

