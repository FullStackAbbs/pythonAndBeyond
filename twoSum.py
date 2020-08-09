
def twoSum(nums, target):
     difference={}
     result=[]
     for index,num in enumerate(nums):
        if difference.get(num) is None:
                difference[target-num]=index
        else:
            result=[difference[num], index]
            return result
res= twoSum([2,7,11,15],9)
print res
        #    python twoSum.py
        #    python palindrome.py