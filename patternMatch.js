// patternMatch('d1tadog', 'datadog') -> true
// patternMatch('d2adog', 'datadog') -> true
// patternMatch('d5dog', 'datadog') -> false
// patternMatch('2', 'ae') -> true
// patternMatch('2eeeee', 'e') -> false

function patternMatch(s1, s2) {
  if (s1.length > s2.length) return false
  let skips = 0

  for (let i = 0; i < s1.length; i++) {
    if (parseInt(s1.substring(i, i + 1))) {
      skips = parseInt(s1.substring(i, i + 1) - 1)
    } else {
      let s2idx = i + skips
      if (s1.substring(i, i + 1) !== s2.substring(s2idx, s2idx + 1)) {
        return false
      }
    }
  }

  return true
}

