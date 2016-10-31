import { Toaster } from './resources/toaster';
import { Router, RouterConfiguration } from 'aurelia-router';
import { FetchConfig } from 'aurelia-auth';
import { autoinject } from 'aurelia-framework';

@autoinject()
export class App {
    router: Router;

    constructor(
        private fetchConfig: FetchConfig,
        private toaster: Toaster) {
        this.fetchConfig.configure();
    }

    activate() {
       return window
        .fetch('/locales/da.json')
        .then(res => res.json())
        .then(data => window["t"] = data);
    }

    configureRouter(config: RouterConfiguration, router: Router) {
        config.title = 'Keeper';
        config.options.pushState = true;
        config.options.root = '/';
        config.map([
            { route: '', name: 'login', moduleId: 'login/login', nav: true, title: 'Login' },
            { route: 'tenants', name: 'tenants', moduleId: 'tenants/tenant-list', nav: true, title: 'Tenants' },
            { route: 'assets', name: 'assets', moduleId: 'assets/asset-list', nav: true, title: 'Assets' },
            { route: 'paymentgrid', name: 'payment-grid', moduleId: 'payments/payment-grid', nav: true, title: 'Payment grid' },
            { route: 'assets/:id?', name: 'assetsDetails', moduleId: 'assets/asset-details', nav: false, title: 'Asset details' },
            { route: 'profile', name: 'profile', moduleId: 'profile/profile', nav: true, title: 'Profile' },
            { route: 'signup', name: 'signup', moduleId: 'login/signup', nav: true, title: 'Sign up' }
        ]);
        this.router = router;
    }
}
