#include <stdio.h>

void fibonacci(int n, int *result) {
    int n1 = 0;
    int n2 = 1;
    int sum = 0;

    if (n == 0) {
        *result = n1;
        return;
    }

    if (n == 1) {
        *result = n2;
        return;
    }

    for (int i = 2; i <= n; i++) {
        sum = n1 + n2;
        n1 = n2;
        n2 = sum;
    }

    *result = n2;
}

int main() {
    int n = 5;
    int result;
    fibonacci(n, &result);
    printf("Fibonacci of %d is %d\n", n, result);
    return 0;
}