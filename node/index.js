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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchSession = exports.fetchMyTeam = exports.fetchCurrentUser = exports.fetchEntry = exports.fetchEntryHistory = exports.fetchH2HMatches = exports.fetchH2HLeagueStandings = exports.fetchClassicLeague = exports.removeFromWatchList = exports.addToWatchList = exports.fetchLive = exports.fetchFixtures = exports.fetchEventStatus = exports.fetchEntryEvent = exports.fetchElementSummary = exports.fetchBootstrap = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
const tough_cookie_1 = require("tough-cookie");
const form_data_1 = __importDefault(require("form-data"));
const node_fetch_2 = __importDefault(require("fetch-cookie/node-fetch"));
const HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Safari/537.36',
};
function validateResponse(response) {
    if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
    }
}
function fetchBootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield node_fetch_1.default('https://draft.premierleague.com/api/bootstrap-static', {
                headers: Object.assign({}, HEADERS),
            });
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
            const response = yield node_fetch_1.default(`https://draft.premierleague.com/api/element-summary/${elementId}`, {
                headers: Object.assign({}, HEADERS),
            });
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
            const response = yield node_fetch_1.default(`https://draft.premierleague.com/api/entry/${entryId}/event/${eventId}`, {
                headers: Object.assign({}, HEADERS),
            });
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
            const response = yield node_fetch_1.default('https://draft.premierleague.com/api/pl/event-status', {
                headers: Object.assign({}, HEADERS),
            });
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
            let uri = 'https://draft.premierleague.com/api/fixtures';
            let response;
            if (eventId !== undefined) {
                uri = `https://draft.premierleague.com/api/fixtures?event=${eventId}`;
            }
            response = yield node_fetch_1.default(uri);
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
            const response = yield node_fetch_1.default(`https://draft.premierleague.com/api/event/${eventId}/live`, {
                headers: Object.assign({}, HEADERS),
            });
            validateResponse(response);
            return response.json();
        }
        catch (error) {
            throw error;
        }
    });
}
exports.fetchLive = fetchLive;
function addToWatchList(session, elementCode) {
    return __awaiter(this, void 0, void 0, function* () {
        const fetchWithCookieJar = node_fetch_2.default(node_fetch_1.default, session);
        const response = yield fetchWithCookieJar(`https://draft.premierleague.com/api/watchlist/${elementCode}`, {
            method: 'POST',
        });
        validateResponse(response);
        return response.status === 201;
    });
}
exports.addToWatchList = addToWatchList;
function removeFromWatchList(session, elementCode) {
    return __awaiter(this, void 0, void 0, function* () {
        const fetchWithCookieJar = node_fetch_2.default(node_fetch_1.default, session);
        const response = yield fetchWithCookieJar(`https://draft.premierleague.com/api/watchlist/${elementCode}`, {
            method: 'DELETE',
        });
        validateResponse(response);
        return response.status === 204;
    });
}
exports.removeFromWatchList = removeFromWatchList;
function fetchClassicLeague(session, leagueId, { pageStandings, pageNewEntries, phase } = {
    pageStandings: 1,
    pageNewEntries: 1,
    phase: 1,
}) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const fetchWithCookieJar = node_fetch_2.default(node_fetch_1.default, session);
            const response = yield fetchWithCookieJar(`https://fantasy.premierleague.com/api/leagues-classic/${leagueId}/standings/?page_new_entries=${pageNewEntries}&page_standings=${pageStandings}&phase=${phase}`);
            validateResponse(response);
            return response.json();
        }
        catch (error) {
            throw error;
        }
    });
}
exports.fetchClassicLeague = fetchClassicLeague;
function fetchH2HLeagueStandings(session, leagueId, { pageStandings, pageNewEntries } = {
    pageStandings: 1,
    pageNewEntries: 1,
}) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const fetchWithCookieJar = node_fetch_2.default(node_fetch_1.default, session);
            const response = yield fetchWithCookieJar(`https://draft.premierleague.com/api/league/${leagueId}/details`);
            validateResponse(response);
            return response.json();
        }
        catch (error) {
            throw error;
        }
    });
}
exports.fetchH2HLeagueStandings = fetchH2HLeagueStandings;
function fetchH2HMatches(session, leagueId, entryId, page = 1) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const fetchWithCookieJar = node_fetch_2.default(node_fetch_1.default, session);
            const response = yield fetchWithCookieJar(`https://draft.premierleague.com/api/leagues-h2h-matches/league/${leagueId}/?page=${page}&entry=${entryId}`);
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
            const response = yield node_fetch_1.default(`https://draft.premierleague.com/api/entry/${entryId}/history`, {
                headers: Object.assign({}, HEADERS),
            });
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
            const response = yield node_fetch_1.default(`https://draft.premierleague.com/api/entry/${entryId}`, {
                headers: Object.assign({}, HEADERS),
            });
            validateResponse(response);
            return response.json();
        }
        catch (error) {
            throw error;
        }
    });
}
exports.fetchEntry = fetchEntry;
function fetchCurrentUser(session) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const fetchWithCookieJar = node_fetch_2.default(node_fetch_1.default, session);
            const response = yield fetchWithCookieJar('https://fantasy.premierleague.com/api/me');
            validateResponse(response);
            return response.json();
        }
        catch (error) {
            throw error;
        }
    });
}
exports.fetchCurrentUser = fetchCurrentUser;
function fetchMyTeam(session, entryId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const fetchWithCookieJar = node_fetch_2.default(node_fetch_1.default, session);
            const response = yield fetchWithCookieJar(`https://fantasy.premierleague.com/api/my-team/${entryId}`);
            validateResponse(response);
            return response.json();
        }
        catch (error) {
            throw error;
        }
    });
}
exports.fetchMyTeam = fetchMyTeam;
function fetchSession(login, password) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const cookieJar = new tough_cookie_1.CookieJar();
            const fetchWithCookieJar = node_fetch_2.default(node_fetch_1.default, cookieJar);
            const formData = new form_data_1.default();
            formData.append('login', login);
            formData.append('password', password);
            formData.append('app', 'plfpl-web');
            formData.append('redirect_uri', 'https://fantasy.premierleague.com/a/login');
            const response = yield fetchWithCookieJar('https://users.premierleague.com/accounts/login/', {
                method: 'POST',
                body: formData,
                headers: Object.assign({}, HEADERS),
            });
            validateResponse(response);
            if (cookieJar
                .getCookieStringSync('https://premierleague.com')
                .includes('pl_profile')) {
                return cookieJar;
            }
            else {
                throw new Error('Wrong credentials');
            }
        }
        catch (error) {
            throw error;
        }
    });
}
exports.fetchSession = fetchSession;
//# sourceMappingURL=index.js.map