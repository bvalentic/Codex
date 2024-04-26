def create_array_with_average(length, average):
  """
  Creates an array of the specified length, filled with the given average value.

  Args:
    length: The desired length of the array.
    average: The value to populate each element of the array with.

  Returns:
    A list representing the array filled with the average value.
  """ 

  return [average] * length  

# Example usage
my_length = 5
my_average = 10.5
result_array = create_array_with_average(my_length, my_average)
print(result_array)  # Output: [10.5, 10.5, 10.5, 10.5, 10.5]
