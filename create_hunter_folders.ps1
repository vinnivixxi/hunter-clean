# create_hunter_folders.ps1
# ---------------------------------------------------------------
# DROP THIS FILE into your hunter-clean folder.
#
# Then open PowerShell, navigate to hunter-clean, and run:
#   powershell -ExecutionPolicy Bypass -File .\create_hunter_folders.ps1
#
# Creates real\ and naughty\ subfolders for all 87 new profiles.
# Safe to re-run — existing folders are never touched or deleted.
# ---------------------------------------------------------------

$BASE_PATH = Join-Path $PSScriptRoot "profile.images"

if (-not (Test-Path $BASE_PATH)) {
    Write-Error "Cannot find profile.images at: $BASE_PATH"
    Write-Host "Make sure this script is inside your hunter-clean folder." -ForegroundColor Yellow
    exit 1
}

$PROFILES = @(

    # -- WHITE (30) --
    "ranchhand38", "kodakjpg",    "nomad31",       "cabinbear",    "fletch26",
    "whit_21",     "patch_sf",    "colt24",        "wrenlate",     "suttertop",
    "birch_33",    "daddywoods",  "poetrybottom",  "rook_la",      "banj0",
    "frostyla",    "timber39",    "luca33",        "passingthru",  "keller43",
    "pikefit",     "wildr45",     "finn20",        "notatop34",    "notrace27",
    "hollis40",    "vesperr",     "gaugeplay",     "lookin37",     "ridge_50",

    # -- LATINO (22) --
    "mango",       "cisco",       "papi_chulo44",  "chino213",     "lagoafterdark",
    "discrete310", "solis41",     "tejano28",      "picohopeless", "cobre31",
    "bignacho",    "nofacela",    "formerathlete", "miel26",       "toro",
    "sereno_nite", "nobadgespls", "flaco",         "nsa_duro",     "canela38",
    "quinto_sd",   "bravo25",

    # -- ASIAN (13) --
    "soju_nights", "ramenlate",   "jadefits",      "hiro22",       "oni_tats",
    "mochi_cam",   "bao41",       "zen_nsa",       "drift20",      "nori33",
    "kainsa",      "taiko909",    "lune",

    # -- AMBIGUOUS (2) --
    "cinderplay",  "elm_side",

    # -- BLACK (20) --
    "onyxdc",      "verso",       "cadeatl",       "bigsable",     "flux25",
    "indigo",      "discrete404", "soleilshoots",  "reefnsa",      "dusk20",
    "quincy48",    "soundguy",    "cayo26",        "nofacenoname", "stone40",
    "mirageanon",  "tempo32",     "flint36",       "lumenlate",    "vale43"
)

$created = 0
$skipped = 0

foreach ($key in $PROFILES) {
    $realPath   = Join-Path $BASE_PATH "$key\real"
    $naughtyPath = Join-Path $BASE_PATH "$key\naughty"

    $isNew = (-not (Test-Path $realPath)) -or (-not (Test-Path $naughtyPath))

    New-Item -ItemType Directory -Force -Path $realPath    | Out-Null
    New-Item -ItemType Directory -Force -Path $naughtyPath | Out-Null

    if ($isNew) {
        Write-Host "  + $key" -ForegroundColor Green
        $created++
    } else {
        $skipped++
    }
}

Write-Host ""
Write-Host "Done." -ForegroundColor Cyan
Write-Host "  Created : $created new profile folders" -ForegroundColor Green
if ($skipped -gt 0) {
    Write-Host "  Skipped : $skipped already existed" -ForegroundColor Gray
}
