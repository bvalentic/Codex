from functools import wraps

def log_function_call(func):
    @wraps(func)  # Preserves function metadata
    def wrapper(*args, **kwargs):
        print(f"Calling function: {func.__name__}")
        result = func(*args, **kwargs)
        print(f"Function {func.__name__} returned: {result}")
        return result
    return wrapper

@log_function_call
def some_function(x, y):
    return x * y

result = some_function(5, 3)  # Output: Calling function: some_function, Function some_function returned: 15

def ensure_non_negative(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        for arg in args:
            if arg < 0:
                raise ValueError("Arguments must be non-negative")
        return func(*args, **kwargs)
    return wrapper

@ensure_non_negative
def calculate_area(width, height):
    return width * height

# calculate_area(-2, 3) will raise a ValueError

def memoize(func):
    cache = {}
    @wraps(func)
    def wrapper(*args, **kwargs):
        key = (args, tuple(kwargs.items()))  # Hashable key for cache
        if key not in cache:
            cache[key] = func(*args, **kwargs)
        return cache[key]
    return wrapper

@memoize
def fibonacci(n):
    if n < 2:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

# Repeated calls to fibonacci(n) will use cached results for efficiency
