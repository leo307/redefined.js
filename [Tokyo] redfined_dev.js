/* Made by Tokyo */

/* Init UI */{
    
    /* Create Subtab */
    UI.AddSubTab(["Misc.", "SUBTAB_MGR"], "[Redefined.js]");
    /* Add Tab Selection */
    UI.AddDropdown(["Misc.", "[Redefined.js]", "[Redefined.js]",], "[Redefined.js] Tab Selection", ["Off", "Extra", "Rage", "Anti-Aim", "Config"], 0);
    
    /* Extra */
    UI.AddCheckbox(["Misc.", "[Redefined.js]", "[Redefined.js]"], "Watermark");
    UI.AddCheckbox(["Misc.", "[Redefined.js]", "[Redefined.js]"], "Clantag");
    UI.AddCheckbox(["Misc.", "[Redefined.js]", "[Redefined.js]"], "Ragebot Monitor");
    UI.AddCheckbox(["Misc.", "[Redefined.js]", "[Redefined.js]"], "Anti-Aim Monitor");
    UI.AddCheckbox(["Misc.", "[Redefined.js]", "[Redefined.js]"], "Flags");
    
    /* Rage */ 
    UI.AddCheckbox(["Misc.", "[Redefined.js]", "[Redefined.js]"], "[Redefined] Rage Enabled");
    UI.AddDropdown(["Misc.", "[Redefined.js]", "[Redefined.js]",], "[Rage] Recharge Methods", ["Off", "Aggresive", "Smart"], 0);
    UI.AddDropdown(["Misc.", "[Redefined.js]", "[Redefined.js]",], "[Rage] Doubletap Methods", ["Off", "Smart", "Express", "Custom"], 0);
    UI.AddSliderInt(["Misc.", "[Redefined.js]", "[Redefined.js]",], "[Rage - DT] Custom Speed", 1, 16);
    UI.AddSliderInt(["Misc.", "[Redefined.js]", "[Redefined.js]",], "[Rage] Visible Minimum Damage", 1, 100);
    UI.AddSliderInt(["Misc.", "[Redefined.js]", "[Redefined.js]",], "[Rage] Autowall Minimum Damage", 1, 100);
    
    /* Anti-Aim */
    UI.AddCheckbox(["Misc.", "[Redefined.js]", "[Redefined.js]"], "[Redefined] Anti-Aim Enabled");
    UI.AddDropdown(["Misc.", "[Redefined.js]", "[Redefined.js]",], "[Anti-Aim] Anti-Aim Level", ["Off", "Beginner", "Intermediate", "Pro"], 0);
    /* Beginner */
    UI.AddDropdown(["Misc.", "[Redefined.js]", "[Redefined.js]",], "[AA - Beginner] Anti-Aim Presets", ["Off", "Apollo", "Venus", "Solar"], 0);
    UI.AddDropdown(["Misc.", "[Redefined.js]", "[Redefined.js]",], "[AA - Beginner] Slowwalk Speed", ["Off", "Normal", "Slow", "Slowest"], 0);
    /* Intermediate */
    UI.AddDropdown(["Misc.", "[Redefined.js]", "[Redefined.js]",], "[AA - Intermediate] Anti-Aim Presets", ["Off", "Apollo", "Venus", "Solar", "Custom"], 0);
    UI.AddSliderInt(["Misc.", "[Redefined.js]", "[Redefined.js]",], "[AA - Intermediate] Custom Desync", -60, 60);
    UI.AddSliderInt(["Misc.", "[Redefined.js]", "[Redefined.js]",], "[AA - Intermediate] Slowwalk", 1, 100);
    /* Pro */
    UI.AddSliderInt(["Misc.", "[Redefined.js]", "[Redefined.js]",], "[AA - Pro] Fake", -60, 60);
    UI.AddSliderInt(["Misc.", "[Redefined.js]", "[Redefined.js]",], "[AA - Pro] Real", -60, 60);
    UI.AddSliderInt(["Misc.", "[Redefined.js]", "[Redefined.js]",], "[AA - Pro] LBY", -60, 60);
    UI.AddSliderInt(["Misc.", "[Redefined.js]", "[Redefined.js]",], "[AA - Pro] Slowwalk", 1, 100);

    /* Config */
    UI.AddCheckbox(["Misc.", "[Redefined.js]", "[Redefined.js]"], "Save Script Settings");
    UI.AddCheckbox(["Misc.", "[Redefined.js]", "[Redefined.js]"], "Load Script Settings");
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
    Math.Lerp = function(min, max, progress) {
        return min + (max - min) * progress;
    }
}

/* Features */{

/* Draw */
var choke_max = 0;
var last_choke = 0;
function red_draw () {

    /* Tab Selection Logic */
   // I have been coding this fucking tab system for 5 hours straight, this shit better be mother fucking perfect or im blowing my brains out.
    /* Extra */
    UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "Watermark"], 0);
    UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "Clantag"], 0);
    UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "Ragebot Monitor"], 0);
    UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "Anti-Aim Monitor"], 0);
    UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "Flags"], 0);
    
    /* Rage */
    UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[Redefined] Rage Enabled"], 0);
    UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[Rage] Recharge Methods"], 0);
    UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[Rage] Doubletap Methods"], 0);
    UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[Rage - DT] Custom Speed"], 0);
    UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[Rage] Visible Minimum Damage"], 0);
    UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[Rage] Autowall Minimum Damage"], 0);
    
    /* Anti-Aim */
    UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[Redefined] Anti-Aim Enabled"], 0);
    UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[Anti-Aim] Anti-Aim Level"], 0);
    UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[AA - Beginner] Anti-Aim Presets"], 0);
    UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[AA - Beginner] Slowwalk Speed"], 0);
    UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[AA - Intermediate] Anti-Aim Presets"], 0);
    UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[AA - Intermediate] Custom Desync"], 0);
    UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[AA - Intermediate] Slowwalk"], 0);
    UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[AA - Pro] Fake"], 0);
    UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[AA - Pro] Real"], 0);
    UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[AA - Pro] LBY"], 0);
    UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[AA - Pro] Slowwalk"], 0);

    /* Config */
    UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "Save Script Settings"], 0);
    UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "Load Script Settings"], 0);

    /* Tab Vars */
    var rage_dt = UI.GetValue(["Misc.", "[Redefined.js]", "[Redefined.js]", "[Rage] Doubletap Methods"]);
    var aa_level = UI.GetValue(["Misc.", "[Redefined.js]", "[Redefined.js]", "[Anti-Aim] Anti-Aim Level"]);
    var beg_presets = UI.GetValue(["Misc.", "[Redefined.js]", "[Redefined.js]", "[AA - Beginner] Anti-Aim Presets"]);
    var beg_slowwalk = UI.GetValue(["Misc.", "[Redefined.js]", "[Redefined.js]", "[AA - Beginner] Slowwalk Speed"]);
    var int_presets = UI.GetValue(["Misc.", "[Redefined.js]", "[Redefined.js]", "[AA - Intermediate] Anti-Aim Presets"]);
    var tabs = UI.GetValue(["Misc.", "[Redefined.js]", "[Redefined.js]", "[Redefined.js] Tab Selection"]);

    /* Quick Anim for Rage Tab */
    switch(rage_dt){
        case 0:{

        } break;
        case 1:{

        } break;
        case 2:{

        } break;
        case 3:{
            UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[Rage - DT] Custom Speed"], 1);
        } break;
    }

    /* Tab Animations */
    /* We do the Tabs Logic After AA because we want aa only to render if in that tab */
    switch(tabs){
        case 0: { /* Off */

        } break;
        case 1: { /* Extra */
            UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "Watermark"], 1);
            UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "Clantag"], 1);
            UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "Ragebot Monitor"], 1);
            UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "Anti-Aim Monitor"], 1);
            UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "Flags"], 1);
            UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[Rage - DT] Custom Speed"], 0);
            UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[Redefined] Anti-Aim Enabled"], 0);
            UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[Anti-Aim] Anti-Aim Level"], 0);
            UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[AA - Beginner] Anti-Aim Presets"], 0);
            UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[AA - Beginner] Slowwalk Speed"], 0);
            UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[AA - Intermediate] Anti-Aim Presets"], 0);
            UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[AA - Intermediate] Custom Desync"], 0);
            UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[AA - Intermediate] Slowwalk"], 0);
            UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[AA - Pro] Fake"], 0);
            UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[AA - Pro] Real"], 0);
            UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[AA - Pro] LBY"], 0);
            UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[AA - Pro] Slowwalk"], 0);
        } break;
        case 2: { /* Rage */
            UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[Redefined] Rage Enabled"], 1);
            UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[Rage] Recharge Methods"], 1);
            UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[Rage] Doubletap Methods"], 1);
            UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[Rage] Visible Minimum Damage"], 1);
            UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[Rage] Autowall Minimum Damage"], 1);
            UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[Redefined] Anti-Aim Enabled"], 0);
            UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[Anti-Aim] Anti-Aim Level"], 0);
            UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[AA - Beginner] Anti-Aim Presets"], 0);
            UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[AA - Beginner] Slowwalk Speed"], 0);
            UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[AA - Intermediate] Anti-Aim Presets"], 0);
            UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[AA - Intermediate] Custom Desync"], 0);
            UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[AA - Intermediate] Slowwalk"], 0);
            UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[AA - Pro] Fake"], 0);
            UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[AA - Pro] Real"], 0);
            UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[AA - Pro] LBY"], 0);
            UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[AA - Pro] Slowwalk"], 0);
        } break;
        case 3: { /* Anti-Aim */
            UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[Rage - DT] Custom Speed"], 0);
            UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[Redefined] Anti-Aim Enabled"], 1);
            UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[Anti-Aim] Anti-Aim Level"], 1);
            UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[AA - Beginner] Anti-Aim Presets"], 0);
            UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[AA - Beginner] Slowwalk Speed"], 0);
            UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[AA - Intermediate] Anti-Aim Presets"], 0);
            UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[AA - Intermediate] Custom Desync"], 0);
            UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[AA - Intermediate] Slowwalk"], 0);
            UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[AA - Pro] Fake"], 0);
            UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[AA - Pro] Real"], 0);
            UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[AA - Pro] LBY"], 0);
            UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[AA - Pro] Slowwalk"], 0);
            /* Anti-Aim Levels */{
            /* Here we want to do if/else statements and not a switch, because we want to disable the UI if not in that tab */
            if(aa_level == 0){ /* Off */

            } else{

            }
            if(aa_level == 1){ /* Beginner */
                UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[AA - Beginner] Anti-Aim Presets"], 1);
                UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[AA - Beginner] Slowwalk Speed"], 1);
            } else{
                UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[AA - Beginner] Anti-Aim Presets"], 0);
                UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[AA - Beginner] Slowwalk Speed"], 0);
            }
            if(aa_level == 2){ /* Intermediate */
                UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[AA - Intermediate] Anti-Aim Presets"], 1);
                UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[AA - Intermediate] Custom Desync"], 1);
                UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[AA - Intermediate] Slowwalk"], 1);
            } else{
                UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[AA - Intermediate] Anti-Aim Presets"], 0);
                UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[AA - Intermediate] Custom Desync"], 0);
                UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[AA - Intermediate] Slowwalk"], 0);
            }
            if(aa_level == 3){ /* Pro */
                UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[AA - Pro] Fake"], 1);
                UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[AA - Pro] Real"], 1);
                UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[AA - Pro] LBY"], 1);
                UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[AA - Pro] Slowwalk"], 1);
            } else{
                UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[AA - Pro] Fake"], 0);
                UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[AA - Pro] Real"], 0);
                UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[AA - Pro] LBY"], 0);
                UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[AA - Pro] Slowwalk"], 0);
    }
             }
        } break;
        case 4: { /* Config */
            UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "Save Script Settings"], 1);
            UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "Load Script Settings"], 1);
            UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[Rage - DT] Custom Speed"], 0);
        } break;
    }

    /* Variables */
    var watermark = UI.GetValue(["Misc.", "[Redefined.js]", "[Redefined.js]", "Watermark"]);
    var mon_rage = UI.GetValue(["Misc.", "[Redefined.js]", "[Redefined.js]", "Ragebot Monitor"]);
    var mon_aa = UI.GetValue(["Misc.", "[Redefined.js]", "[Redefined.js]", "Anti-Aim Monitor"]);
    var flags = UI.GetValue(["Misc.", "[Redefined.js]", "[Redefined.js]", "Flags"]);
    var save_script = UI.GetValue(["Misc.", "[Redefined.js]", "[Redefined.js]", "Save Script Settings"]);
    var load_script = UI.GetValue(["Misc.", "[Redefined.js]", "[Redefined.js]", "Load Script Settings"]);
    if (!Globals.ChokedCommands() && last_choke)
    choke_max = last_choke;
    last_choke = Globals.ChokedCommands();

    /* Watermark */
    if(watermark){

    }

    /* Clantag */
    

    /* Ragebot Monitor */


    /* Anti-Aim Monitor */


    /* Flags */
    if(flags){
        Render.FilledRect(100, 100, Math.Lerp(0, 500, choke_max / 14) * get_dpi_scale(), 150 * get_dpi_scale(), [255, 0, 0, 255]); // Temp Choke Flag
    }

    /* Config */
    if(save_script){
        Cheat.PrintChat("Saved Redefined.Technology Settings \n");
        Cheat.Print("Saved Redefined.Technology Settings \n");
        UI.SetValue(["Misc.", "[Redefined.js]", "[Redefined.js]", "Save Script Settings"], 0);
    }
    if(load_script){
        Cheat.PrintChat("Loaded Redefined.Technology Settings \n");
        Cheat.Print("Loaded Redefined.Technology Settings \n");
        UI.SetValue(["Misc.", "[Redefined.js]", "[Redefined.js]", "Load Script Settings"], 0);
    }

}

function red_createmove () {

    /* Variables */
    var rage_enabled = UI.GetValue(["Misc.", "[Redefined.js]", "[Redefined.js]", "[Redefined] Rage Enabled"]);
    var rage_charge = UI.GetValue(["Misc.", "[Redefined.js]", "[Redefined.js]", "[Rage] Recharge Methods"]);
    var rage_dt = UI.GetValue(["Misc.", "[Redefined.js]", "[Redefined.js]", "[Rage] Doubletap Methods"]);
    var rage_dtspeed = UI.GetValue(["Misc.", "[Redefined.js]", "[Redefined.js]", "[Rage - DT] Custom Speed"]);
    var aa_enabled = UI.GetValue(["Misc.", "[Redefined.js]", "[Redefined.js]", "[Redefined] Anti-Aim Enabled"]);
    var aa_level = UI.GetValue(["Misc.", "[Redefined.js]", "[Redefined.js]", "[Anti-Aim] Anti-Aim Level"]);
    var beg_presets = UI.GetValue(["Misc.", "[Redefined.js]", "[Redefined.js]", "[AA - Beginner] Anti-Aim Presets"]);
    var beg_slowwalk = UI.GetValue(["Misc.", "[Redefined.js]", "[Redefined.js]", "[AA - Beginner] Slowwalk Speed"]);
    var int_presets = UI.GetValue(["Misc.", "[Redefined.js]", "[Redefined.js]", "[AA - Intermediate] Anti-Aim Presets"]);
    
    /* Rage Logic */
    if(rage_enabled){

        /* Recharge Methods */
        switch(rage_charge){
            case 0:{ /* Off */

            } break;
            case 1:{ /* Aggresive */

            } break;
            case 2:{ /* Smart */

            } break;
        }

        /* Doubletap Methods */
        switch(rage_dt){
            case 0:{ /* Off */

            } break;
            case 1:{ /* Smart */

            } break;
            case 2:{ /* Express */

            } break;
            case 3:{ /* Custom */
                UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[Rage - DT] Custom Speed"], 0);
                Exploit.OverrideTolerance(0);
                Exploit.OverrideShift(rage_dtspeed);
            } break;
        }
    }

    /* Anti-Aim Logic */
    if(aa_enabled){
        AntiAim.SetOverride(1); 
        /* Anti-Aim Knowledge Levels */
        switch(aa_level){
            case 0:{ /* Off */

            } break;
            case 1:{ /* Beginner */

            } break;
            case 2:{ /* Intermediate */

            } break;
            case 3:{ /* Pro */

            } break;
        }
    }

}

}

/* Callbacks */{
Cheat.RegisterCallback("Draw", "red_draw");
Cheat.RegisterCallback("CreateMove", "red_createmove");
}