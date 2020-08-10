If we don't compare functions via time, what should we use?
- instead of counting second, we can count the number of simple operations our computer has to perform

# Counting Operations
- in our example (Add2 snippet) we have:
  - multiplication
  - addition
  - division
- this gives us 3 simple operations, reguardless of the size of n 
- in comparison to Add1 we have:
  - loop which contains n additions (+=), n assignment operator (+=), n additions (i++), n assignments (i++), 1 assignment (total assignment), 1 assignment (i = 1), n comparisons
  - 5n + 2 operations (the number of operations grows roughly proportionally with n)