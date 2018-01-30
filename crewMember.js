class CrewMember {
  constructor(position) {
    this.position = position;
  }

  currentShip() {
    if(this.ship) {
      return this.ship;
    } else {
      return "Looking for a Rig";
    }
  }
}
