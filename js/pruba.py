def search(a, n):
    min = 0
    max = len(a)-1
    guess = 0
    while a[guess] != n:
        guess = (min+max)/2      
        if a[guess] < n:
            min = guess + 1
        elif a[guess] > n:
            max = guess - 1
        elif max < min:
            print("No existe el enumero")
            break;

    print("Lo encontre {} --> en el indice {}".format(a[guess], guess))


a = [2,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49,51,53,55,57,59]
search(a, 1)




