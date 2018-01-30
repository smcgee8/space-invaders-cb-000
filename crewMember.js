class CrewMember {
  constructor(position) {
    this.position = position;
    this.currentShip = "Looking for a Rig";
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
    if (this.position === "Defender" && this.ship){
      this.ship.cloaked = true;
    } else {
      return "had no effect";
    }
  }

  chargePhasers() {
    if (this.position === "Gunner" && this.ship){
      return;
    } else {
      return "had no effect";
    }
  }

}
