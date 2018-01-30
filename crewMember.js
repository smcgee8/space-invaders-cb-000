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

  engageWarpDrive() {
    if (this.position === "Pilot" && this.ship){
      return;
    } else {
      return "had no effect";
    }
  }

  setsInvisibility() {

  }

  chargePhasers() {

  }

}
