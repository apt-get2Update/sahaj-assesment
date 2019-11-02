function turnMapper(){
    switch (key) {
      case 1:
        return 'strike';
      case 2:
        return  'multiStrike'
      case 3:
          return 'redStrike';
      case 4:
        return 'strikerStrike';
      case 5:
        return 'defunctCoin'
      case 6:
        return 'none'
    }
}
export function inputParser (input){
    return input.map(i => turnMapper(i));
}