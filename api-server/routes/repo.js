var express = require('express');
var router = express.Router();
var apicache = require('apicache')
    .options({
        debug: true
    }).middleware;
var repMod = require('../modules/repository');

/**
 * [description]
 *
 * @route
 *
 */
router.put('/comps', function(req, res, next) {
    repMod.updComps(req, function(error, result) {
        if (error) res.status(200).send(error);
        else res.status(200).send(result);
    });
});

/**
 * [description]
 *
 * @route
 *
 */
router.get('/comps', apicache('30 minutes'), function(req, res, next) {
    //cache(req, {
    //type: 'memory',
    //time: 36000000
    //}, function(error_cache, result_cache) {
    repMod.getComps(req, function(error, result) {
        if (error) res.status(200).send(error);
        else res.status(200).send(result);
    });
    //});
});

/**
 * [description]
 *
 * @route
 *
 */
router.post('/comps', function(req, res, next) {
    repMod.loadComps(req, function(error, result) {
        if (error) res.status(200).send(error);
        else res.status(200).send(result);
    });
});

/**
 * [description]
 *
 * @route
 *
 */
router.post('/devs', function(req, res, next) {
    repMod.updDevs(req, function(error, result) {
        if (error) res.status(200).send(error);
        else res.status(200).send(result);
    });
});

router.get('/procs', apicache('5 minutes'), function(req, res, next) {
    repMod.getProcs(req, function(error, result) {
        if (error) res.status(200).send(error);
        else res.status(200).send(result);
    });
});

module.exports = router;