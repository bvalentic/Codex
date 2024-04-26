import random
import statistics

def create_array_with_average(length, average, noise_std=None):
  """
  Creates an array with an average and random noise. 

  Args:
    length: The desired length of the array.
    average: The base value to use for the array elements.
    noise_std: The standard deviation of the random noise. If None, 
               calculate a default relative to the average.

  Returns:
    A list representing the array filled with the average values and random noise.
  """ 

  def add_noise(value):
    std = noise_std if noise_std is not None else average * 0.1  # 10% of the average
    return value + random.gauss(0, std) 

  initArray = [length] * length

  std_dev = statistics.stdev(initArray)
  print(std_dev)

  return [add_noise(average) for _ in range(length)]  

# Example usage (calculating the standard deviation)
data = [10, 12, 9, 11.5]  # Sample data
result_array = create_array_with_average(len(data), statistics.mean(data)) 
print(result_array)
