 f = 0
        for num in nums:
            if(num != 0):
                nums[f] = num
                f += 1

        for x in range(f, len(nums)):
            nums[x] = 0