import { Injectable } from '@nestjs/common';

@Injectable()
export class GeoProxService {
  isWithinRadius(deliveryCords: any, poi: any) {
    const { cordX: cordX1, cordY: cordY1, dMax } = deliveryCords;
    const { cordX: cordX2, cordY: cordY2 } = poi;

    const distance = Math.sqrt(
      (cordX2 - cordX1) * (cordX2 - cordX1) +
        (cordY2 - cordY1) * (cordY2 - cordY1),
    );

    return distance <= dMax ? poi : null;
  }

  getProximityList(deliveryCords: any, pois: any[]) {
    const proximityPois = pois
      .map((poi) => this.isWithinRadius(deliveryCords, poi))
      .filter((poi) => poi !== null);

    return proximityPois;
  }
}
