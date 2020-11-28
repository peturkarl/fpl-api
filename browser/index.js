"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchMyTeam = exports.fetchCurrentUser = exports.fetchEntry = exports.fetchEntryHistory = exports.fetchH2HMatches = exports.fetchH2HLeagueStandings = exports.fetchClassicLeague = exports.removeFromWatchList = exports.addToWatchList = exports.fetchLive = exports.fetchFixtures = exports.fetchEventStatus = exports.fetchEntryEvent = exports.fetchElementSummary = exports.fetchBootstrap = void 0;
function validateResponse(response) {
    if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
    }
}
function fetchBootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch('https://fantasy.premierleague.com/api/bootstrap-static/');
            validateResponse(response);
            return response.json();
        }
        catch (error) {
            throw error;
        }
    });
}
exports.fetchBootstrap = fetchBootstrap;
function fetchElementSummary(elementId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`https://fantasy.premierleague.com/api/element-summary/${elementId}/`);
            let data;
            validateResponse(response);
            data = yield response.json();
            data.id = elementId;
            return data;
        }
        catch (error) {
            throw error;
        }
    });
}
exports.fetchElementSummary = fetchElementSummary;
function fetchEntryEvent(entryId, eventId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`https://fantasy.premierleague.com/api/entry/${entryId}/event/${eventId}/picks/`);
            validateResponse(response);
            return response.json();
        }
        catch (error) {
            throw error;
        }
    });
}
exports.fetchEntryEvent = fetchEntryEvent;
function fetchEventStatus() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch('https://fantasy.premierleague.com/api/event-status');
            validateResponse(response);
            return response.json();
        }
        catch (error) {
            throw error;
        }
    });
}
exports.fetchEventStatus = fetchEventStatus;
function fetchFixtures(eventId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let uri = 'https://fantasy.premierleague.com/api/fixtures/';
            let response;
            if (eventId !== undefined) {
                uri = `https://fantasy.premierleague.com/api/fixtures?event=${eventId}`;
            }
            response = yield fetch(uri);
            validateResponse(response);
            return response.json();
        }
        catch (error) {
            throw error;
        }
    });
}
exports.fetchFixtures = fetchFixtures;
function fetchLive(eventId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`https://fantasy.premierleague.com/api/event/${eventId}/live/`);
            validateResponse(response);
            return response.json();
        }
        catch (error) {
            throw error;
        }
    });
}
exports.fetchLive = fetchLive;
function addToWatchList(elementCode) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`https://fantasy.premierleague.com/api/watchlist/${elementCode}/`, {
            method: 'POST',
        });
        validateResponse(response);
        return response.status === 201;
    });
}
exports.addToWatchList = addToWatchList;
function removeFromWatchList(elementCode) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`https://fantasy.premierleague.com/api/watchlist/${elementCode}/`, {
            method: 'DELETE',
        });
        validateResponse(response);
        return response.status === 204;
    });
}
exports.removeFromWatchList = removeFromWatchList;
function fetchClassicLeague(leagueId, { pageStandings, pageNewEntries, phase } = {
    pageStandings: 1,
    pageNewEntries: 1,
    phase: 1,
}) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`https://fantasy.premierleague.com/api/leagues-classic/${leagueId}/standings/?page_new_entries=${pageNewEntries}&page_standings=${pageStandings}&phase=${phase}`);
            validateResponse(response);
            return response.json();
        }
        catch (error) {
            throw error;
        }
    });
}
exports.fetchClassicLeague = fetchClassicLeague;
function fetchH2HLeagueStandings(leagueId, { pageStandings, pageNewEntries } = {
    pageStandings: 1,
    pageNewEntries: 1,
}) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`https://fantasy.premierleague.com/api/leagues-h2h/${leagueId}/standings/?page_new_entries=${pageNewEntries}&page_standings=${pageStandings}`);
            validateResponse(response);
            return response.json();
        }
        catch (error) {
            throw error;
        }
    });
}
exports.fetchH2HLeagueStandings = fetchH2HLeagueStandings;
function fetchH2HMatches(leagueId, entryId, page = 1) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`https://fantasy.premierleague.com/api/leagues-h2h-matches/league/${leagueId}/?page=${page}&entry=${entryId}`);
            validateResponse(response);
            return response.json();
        }
        catch (error) {
            throw error;
        }
    });
}
exports.fetchH2HMatches = fetchH2HMatches;
function fetchEntryHistory(entryId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`https://fantasy.premierleague.com/api/entry/${entryId}/history/`);
            validateResponse(response);
            return response.json();
        }
        catch (error) {
            throw error;
        }
    });
}
exports.fetchEntryHistory = fetchEntryHistory;
function fetchEntry(entryId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`https://fantasy.premierleague.com/api/entry/${entryId}/`);
            validateResponse(response);
            return response.json();
        }
        catch (error) {
            throw error;
        }
    });
}
exports.fetchEntry = fetchEntry;
function fetchCurrentUser() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch('https://fantasy.premierleague.com/api/me/');
            validateResponse(response);
            return response.json();
        }
        catch (error) {
            throw error;
        }
    });
}
exports.fetchCurrentUser = fetchCurrentUser;
function fetchMyTeam(entryId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`https://fantasy.premierleague.com/api/my-team/${entryId}/`);
            validateResponse(response);
            return response.json();
        }
        catch (error) {
            throw error;
        }
    });
}
exports.fetchMyTeam = fetchMyTeam;
//# sourceMappingURL=index.js.map