import random

def create_array_with_average(length, average, noise_std=0.1):
  """
  Creates an array of the specified length, filled with the given average value 
  and a random noise component.

  Args:
    length: The desired length of the array.
    average: The value to populate each element of the array with.
    noise_std: The standard deviation of the random noise to add 
               (defaults to 0.1).

  Returns:
    A list representing the array filled with average values with random noise.
  """

  def add_noise(value):
    """Helper function to add random noise to a value."""
    return value + random.gauss(0, noise_std)  # Add Gaussian noise with mean 0, stddev noise_std

  return [add_noise(average) for _ in range(length)]  

# Example usage
my_length = 5
my_average = 10.5
result_array = create_array_with_average(my_length, my_average)
print(result_array)
