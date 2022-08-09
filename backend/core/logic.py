import time

def count_divisors(n):
    count = 0
    for i in range(1, n + 1):
        if n % i == 0:
            count += 1
    return count

def count_same_divisors(n):
    count = 0
    for i in range(1, n + 1):
        if count_divisors(i) == count_divisors(i + 1):
            count += 1
    return count




