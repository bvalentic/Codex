def logging_decorator(func):
    """Decorator to log function calls."""
    def wrapper(*args, **kwargs):
        print(f"Calling {func.__name__} with arguments {args} and keywords {kwargs}")
        result = func(*args, **kwargs)
        print(f"Function {func.__name__} returned {result}")
        return result
    return wrapper

@logging_decorator
def greet(name):
    """Greets the user by name."""
    return f"Hello, {name}!"

print(greet("Alice"))
