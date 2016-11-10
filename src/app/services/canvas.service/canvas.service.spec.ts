/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CanvasService } from './canvas.service';

describe('Service: Canvas', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanvasService]
    });
  });

  it('should have a canvas service ', inject([CanvasService], (service: CanvasService) => {
    expect(service).toBeTruthy();
  }));

  it('should have an init method', inject([CanvasService], (service: CanvasService) => {
    expect(service.init).toBeTruthy();
  }));

  // it('should injest socket ids', inject([CanvasService], (service: CanvasService) => {
  //   var lengths = service.addLayer('rocko')
  //   console.log(lengths);
  //  // expect().toBe('asdf');
  // }));


});
