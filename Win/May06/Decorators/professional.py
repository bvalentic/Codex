from flask import Flask
from functools import wraps

app = Flask(__name__)

@app.route("/hello")
def say_hello():
    return "Hello, World!"

def log_execution(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        print(f"Executing function: {func.__name__}")
        result = func(*args, **kwargs)
        print(f"Completed function:  {func.__name__}, Result: {result}")
        return result
    return wrapper

def requires_admin(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        if not current_user.is_admin:
            return "Unauthorized Access", 403 
        return func(*args, **kwargs)
    return wrapper

def requires_admin(func):
    """Decorator to ensure a user is an admin before executing a function."""
    @wraps(func)
    def wrapper(*args, **kwargs):
        if not current_user.is_admin:
            return "Unauthorized Access", 403 
        return func(*args, **kwargs)
    return wrapper
