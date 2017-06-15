"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/do');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/map');
var BlockService = (function () {
    function BlockService(_http) {
        this._http = _http;
        //replace this with an http api request to collective access
        this._blockUrl = 'api/blocks/blocks.json';
    }
    //getblocks holds the api call
    BlockService.prototype.getBlocks = function () {
        return this._http.get(this._blockUrl)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log('ALL: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    BlockService.prototype.getBlock = function (blockId) {
        //takes a parameter and returns the block info     
        return this.getBlocks()
            .map(function (blocks) { return blocks.find(function (b) { return b.blockId === blockId; }); });
        ;
    };
    BlockService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server Error');
    };
    BlockService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], BlockService);
    return BlockService;
}());
exports.BlockService = BlockService;
//# sourceMappingURL=block.service.js.map