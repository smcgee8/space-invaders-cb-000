class CrewMember {
  constructor(position) {
    this.position = position;
    this.currentShip = "Looking for a Rig";
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
      this.currentShip.cloaked = true;
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
