import MathCharacter from '../math';

export default class Daemon extends MathCharacter {
  constructor(name) {
    super(name, 'daemon');
    this.defence = 40;
  }
}