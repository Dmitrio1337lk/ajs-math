import MathCharacter from '../math';

export default class Magician extends MathCharacter {
  constructor(name) {
    super(name, 'magician');
    this.defence = 40;
  }
}