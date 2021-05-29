/* Made by Tokyo */

/* Start of UI */{
    
    /* Create Subtab */
    UI.AddSubTab(["Misc.", "SUBTAB_MGR"], "[Redefined.js]");
    /* Add Tab Selection */
    UI.AddDropdown(["Misc.", "[Redefined.js]", "[Redefined.js]",], "[Redefined.js] Tab Selection", ["Off", "Extra", "Rage", "Anti-Aim"], 0);
    /* Extra */
    UI.AddCheckbox(["Misc.", "[Redefined.js]", "[Redefined.js]"], "Watermark");
    UI.AddCheckbox(["Misc.", "[Redefined.js]", "[Redefined.js]"], "Ragebot Monitor");
    UI.AddCheckbox(["Misc.", "[Redefined.js]", "[Redefined.js]"], "Anti-Aim Monitor");
    /* Anti-Aim */
    UI.AddCheckbox(["Misc.", "[Redefined.js]", "[Redefined.js]"], "[Redefined] Anti-Aim Enabled");
    /* Rage */ 
    UI.AddCheckbox(["Misc.", "[Redefined.js]", "[Redefined.js]"], "[Redefined] Rage Enabled");
    

}

/* Utilities */{

    /* Classic RGB Conversion */
    /* var rainbow_clr = HSVtoRGB(Globals.Realtime() / 3 % 1, 1, 1); */
    /* [rainbow_clr[0], rainbow_clr[1], rainbow_clr[2], rainbow_clr[3]] */
    function HSVtoRGB(h, s, v) {
        var r, g, b, i, f, p, q, t;
        i = Math.floor(h * 6);
        f = h * 6 - i;
        p = v * (1 - s);
        q = v * (1 - f * s);
        t = v * (1 - (1 - f) * s);
        switch (i % 6) {
            case 0: r = v, g = t, b = p; break;
            case 1: r = q, g = v, b = p; break;
            case 2: r = p, g = v, b = t; break;
            case 3: r = p, g = q, b = v; break;
            case 4: r = t, g = p, b = v; break;
            case 5: r = v, g = p, b = q; break;
        }
        return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255), 255];
    }

    /* Gradient RGB Conversion */

    /* DPI Scaling (Res Scaling) */
    function get_dpi_scale () {
        return Render.GetScreenSize()[1] / 1080 /* everything scaled by base size on a 1080p monitors */;
    }
}

/* Features */{

function red_draw () {

    /* Tab Selection Logic */
    UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "Watermark"], 0);
    UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "Ragebot Monitor"], 0);
    UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "Anti-Aim Monitor"], 0);
    UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[Redefined] Anti-Aim Enabled"], 0);
    UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[Redefined] Rage Enabled"], 0);
    var tabs = UI.GetValue(["Misc.", "[Redefined.js]", "[Redefined.js]", "[Redefined.js] Tab Selection"])
    
    if(tabs == 0){
        /* Off */
    }
    if(tabs == 1){
        /* Extra */
        UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "Watermark"], 1);
        UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "Ragebot Monitor"], 1);
        UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "Anti-Aim Monitor"], 1);
    }
    if(tabs == 2){
        /* Rage */
        UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[Redefined] Rage Enabled"], 1);
    }
    if(tabs == 3){
        /* Anti-Aim */ 
        UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[Redefined] Anti-Aim Enabled"], 1);
    }

    /* Variables */
    var watermark = UI.GetValue(["Misc.", "[Redefined.js]", "[Redefined.js]", "Watermark"]);
    var mon_rage = UI.GetValue(["Misc.", "[Redefined.js]", "[Redefined.js]", "Ragebot Monitor"]);
    var mon_aa = UI.GetValue(["Misc.", "[Redefined.js]", "[Redefined.js]", "Anti-Aim Monitor"]);

    /* Watermark */


    /* Ragebot Monitor */


    /* Anti-Aim Monitor */


}

function red_createmove () {

    /* Variables */
    var aa_enabled = UI.GetValue(["Misc.", "[Redefined.js]", "[Redefined.js]", "[Redefined] Anti-Aim Enabled"]);
    var rage_enabled = UI.GetValue(["Misc.", "[Redefined.js]", "[Redefined.js]", "[Redefined] Rage Enabled"]);

    /* Rage Logic */
    if(rage_enabled){
        
    }

    /* Anti-Aim Logic */
    if(aa_enabled){

    }

}

}

/* Callbacks */{
Cheat.RegisterCallback("Draw", "red_draw");
Cheat.RegisterCallback("CreateMove", "red_createmove");
}