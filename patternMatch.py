class Solution:
    def findAndReplacePattern(self, words, pattern):
        '''
        :type words: list of str
        :type pattern: str
        :rtype: list of str
        '''
        matches = []

        for word in words:
            if self.is_aligned(word, pattern):
                matches.append(word)

        return matches

    def is_aligned(self, word, pattern):
        if len(word) != len(pattern):
            return False

        word_to_pattern = [0] * 256
        pattern_to_word = [0] * 256

        for i in range(0, len(word)):
            word_char = ord(word[i])
            pattern_char = ord(pattern[i])

            if word_to_pattern[word_char] == 0:
                word_to_pattern[word_char] = pattern_char

            if pattern_to_word[pattern_char] == 0:
                pattern_to_word[pattern_char] = word_char

            if (
                word_to_pattern[word_char] != pattern_char or
                pattern_to_word[pattern_char] != word_char
            ):
                return False

        return True