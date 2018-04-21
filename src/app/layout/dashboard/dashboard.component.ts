import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];

    constructor() {
        this.sliders.push(
            {
                imagePath: 'assets/images/slider1.jpg',
                label: 'Life Republic @hinjewadi',
                text:
                    'Luxurious upscale selfsustaining township in Hinjewadi Pune.'
            },
            {
                imagePath: 'assets/images/slider2.jpg',
                label: 'Lavish Duplexes',
                text: 'Designed as per your requirements and specifications!'
            },
            {
                imagePath: 'assets/images/slider3.jpg',
                label: 'Customizing Interior',
                text:
                    'Interiors provided by our experts meeting your needs and expectations.'
            }
        );

        this.alerts.push(
            {
                id: 1,
                type: 'success',
                message: `TruHomes welcome you to whole new world !`
            },
            {
                id: 2,
                type: 'warning',
                message: `TruHomes`
            }
        );
    }

    ngOnInit() {}

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
}
