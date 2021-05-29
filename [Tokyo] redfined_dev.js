/* Made by Tokyo */

/* Init UI */{
    
    /* Create Subtab */
    UI.AddSubTab(["Misc.", "SUBTAB_MGR"], "[Redefined.js]");
    /* Add Tab Selection */
    UI.AddDropdown(["Misc.", "[Redefined.js]", "[Redefined.js]",], "[Redefined.js] Tab Selection", ["Off", "Extra", "Rage", "Anti-Aim"], 0);
    
    /* Extra */
    UI.AddCheckbox(["Misc.", "[Redefined.js]", "[Redefined.js]"], "Watermark");
    UI.AddCheckbox(["Misc.", "[Redefined.js]", "[Redefined.js]"], "Ragebot Monitor");
    UI.AddCheckbox(["Misc.", "[Redefined.js]", "[Redefined.js]"], "Anti-Aim Monitor");
    
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
   // I have been coding this fucking tab system for 5 hours straight, this shit better be mother fucking perfect or im blowing my brains out.
    /* Extra */
    UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "Watermark"], 0);
    UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "Ragebot Monitor"], 0);
    UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "Anti-Aim Monitor"], 0);
    
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

    /* UI Vars */
    var rage_dt = UI.GetValue(["Misc.", "[Redefined.js]", "[Redefined.js]", "[Rage] Doubletap Methods"]);
    var aa_level = UI.GetValue(["Misc.", "[Redefined.js]", "[Redefined.js]", "[Anti-Aim] Level"]);
    var beg_presets = UI.GetValue(["Misc.", "[Redefined.js]", "[Redefined.js]", "[AA - Beginner] Anti-Aim Presets"]);
    var beg_slowwalk = UI.GetValue(["Misc.", "[Redefined.js]", "[Redefined.js]", "[AA - Beginner] Slowwalk Speed"]);
    var int_presets = UI.GetValue(["Misc.", "[Redefined.js]", "[Redefined.js]", "[AA - Intermediate] Anti-Aim Presets"]);
    var tabs = UI.GetValue(["Misc.", "[Redefined.js]", "[Redefined.js]", "[Redefined.js] Tab Selection"])
    
    switch(tabs){
        case 0: { /* Off */

        } break;
        case 1: { /* Extra */
            UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "Watermark"], 1);
            UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "Ragebot Monitor"], 1);
            UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "Anti-Aim Monitor"], 1);
            UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[Rage - DT] Custom Speed"], 1);
        } break;
        case 2: { /* Rage */
            UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[Redefined] Rage Enabled"], 1);
            UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[Rage] Recharge Methods"], 1);
            UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[Rage] Doubletap Methods"], 1);
            UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[Rage] Visible Minimum Damage"], 1);
            UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[Rage] Autowall Minimum Damage"], 1);
        } break;
        case 3: { /* Anti-Aim */
            UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[Rage - DT] Custom Speed"], 1);
            UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[Redefined] Anti-Aim Enabled"], 1);
            UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[Anti-Aim] Anti-Aim Level"], 1);
        } break;

    }

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

    /* Animations for Anti-Aim Tab */
    switch(aa_level){
        case 0: { /* Off */

        } break;
        case 1: { /* Beginner */
            UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[AA - Beginner] Anti-Aim Presets"], 1);
            UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[AA - Beginner] Slowwalk Speed"], 1);
        } break;
        case 2: { /* Intermediate */
            UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[AA - Intermediate] Anti-Aim Presets"], 1);
            UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[AA - Intermediate] Custom Desync"], 1);
            UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[AA - Intermediate] Slowwalk"], 1);
        } break;
        case 3: { /* Pro */
            UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[AA - Pro] Fake"], 1);
            UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[AA - Pro] Real"], 1);
            UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[AA - Pro] LBY"], 1);
            UI.SetEnabled(["Misc.", "[Redefined.js]", "[Redefined.js]", "[AA - Pro] Slowwalk"], 1);
        } break;
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
    var rage_enabled = UI.GetValue(["Misc.", "[Redefined.js]", "[Redefined.js]", "[Redefined] Rage Enabled"]);
    var rage_charge = UI.GetValue(["Misc.", "[Redefined.js]", "[Redefined.js]", "[Rage] Recharge Methods"]);
    var rage_dt = UI.GetValue(["Misc.", "[Redefined.js]", "[Redefined.js]", "[Rage] Doubletap Methods"]);
    var rage_dtspeed = UI.GetValue(["Misc.", "[Redefined.js]", "[Redefined.js]", "[Rage - DT] Custom Speed"]);
    var aa_enabled = UI.GetValue(["Misc.", "[Redefined.js]", "[Redefined.js]", "[Redefined] Anti-Aim Enabled"]);
    var aa_level = UI.GetValue(["Misc.", "[Redefined.js]", "[Redefined.js]", "[Anti-Aim] Level"]);
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