/* Made by Tokyo */

/* Start of UI */{
    
    /* Create all Subtabs */
    UI.AddSubTab(["Misc.", "SUBTAB_MGR"], "[Redefined] Extra");
    UI.AddSubTab(["Misc.", "SUBTAB_MGR"], "[Redefined] Anti-Aim");
    UI.AddSubTab(["Misc.", "SUBTAB_MGR"], "[Redefined] Rage");
    /* Extra */
    UI.AddCheckbox(["Misc.", "[Redefined] Extra", "[Redefined] Extra"], "Ragebot Monitor");
    UI.AddCheckbox(["Misc.", "[Redefined] Extra", "[Redefined] Extra"], "Anti-Aim Monitor");
    UI.AddCheckbox(["Misc.", "[Redefined] Extra", "[Redefined] Extra"], "Keybind States");
    /* Anti-Aim */
    UI.AddCheckbox(["Misc.", "[Redefined] Anti-Aim", "[Redefined] Anti-Aim"], "[Redefined] Anti-Aim Enabled");
    /* Rage */ 
    UI.AddCheckbox(["Misc.", "[Redefined] Rage", "[Redefined] Rage"], "[Redefined] Rage Enabled");
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

    /* Variables */
    var red_rage_monitor = UI.GetValue(["Misc.", "[Redefined] Extra", "[Redefined] Extra", "Ragebot Monitor"]);
    var red_aa_monitor = UI.GetValue(["Misc.", "[Redefined] Extra", "[Redefined] Extra", "Anti-Aim Monitor"]);
    var red_keybinds = UI.GetValue(["Misc.", "[Redefined] Extra", "[Redefined] Extra", "Keybind States"]);
    var rainbow_clr = utils.hsv_to_rgb(Globals.Realtime() / 3 % 1, 1, 1);
    var dpi_scale = utils.get_dpi_scale();
    var k_enabled = UI.GetValue(["Misc.", "Tokyo Misc", "Tokyo Misc", "[New] Keybind States"]);
    var k_x = UI.GetValue(["Misc.", "Tokyo Locations", "Tokyo Locations", "[Keybinds] X Level"]);
    var k_y = UI.GetValue(["Misc.", "Tokyo Locations", "Tokyo Locations", "[Keybinds] Y Level"]);
     var isDt = UI.GetValue(["Rage", "Exploits", "Keys", "Key assignment", "Double tap"]);
     var sDt = UI.GetHotkeyState(["Rage", "Exploits", "Keys", "Key assignment", "Double tap"]);
     var isFd = UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "Fake duck"]);
     var sFd = UI.GetHotkeyState(["Rage", "Anti Aim", "General", "Key assignment", "Fake duck"]);
     var isHideshots = UI.GetValue(["Rage", "Exploits", "Keys", "Key assignment", "Hide shots"]);
     var sHideshots = UI.GetHotkeyState(["Rage", "Exploits", "Keys", "Key assignment", "Hide shots"]);
     var isSw = UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "Slow walk"]);
     var sSw = UI.GetHotkeyState(["Rage", "Anti Aim", "General", "Key assignment", "Slow walk"]);
     var isAP = UI.GetValue(["Misc.", "Keys", "General", "Key assignment", "Auto peek"]);
     var sAP = UI.GetHotkeyState(["Misc.", "Keys", "General", "Key assignment", "Auto peek"]);
     var isFB = UI.GetValue(["Rage", "General", "Key assignment", "Force body aim"]);
     var sFB = UI.GetHotkeyState(["Rage", "General", "Key assignment", "Force body aim"]);
     var isFS = UI.GetValue(["Rage", "General", "Key assignment", "Force safe point"]);
     var sFS = UI.GetHotkeyState(["Rage", "General", "Key assignment", "Force safe point"]);
     var tDMG = UI.GetHotkeyState(["Misc.", "Keys", "Key assignment", "Tokyo Minimum Damage on Key"]);
     var alt_invert = UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "AA Direction inverter"]);
     var invert = UI.GetHotkeyState(["Rage", "Anti Aim", "General", "Key assignment", "AA Direction inverter"]);

    /* Ragebot Monitor */


    /* Anti-Aim Monitor */


    /* Keybind States */
    var rainbow_clr = utils.hsv_to_rgb(Globals.Realtime() / 3 % 1, 1, 1);
    var dpi_scale = get_dpi_scale();
    var k_x = UI.GetValue(["Misc.", "Tokyo Locations", "Tokyo Locations", "[Keybinds] X Level"]);
    var k_y = UI.GetValue(["Misc.", "Tokyo Locations", "Tokyo Locations", "[Keybinds] Y Level"]);
    var isDt = UI.GetValue(["Rage", "Exploits", "Keys", "Key assignment", "Double tap"]);
    var sDt = UI.GetHotkeyState(["Rage", "Exploits", "Keys", "Key assignment", "Double tap"]);
    var isFd = UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "Fake duck"]);
    var sFd = UI.GetHotkeyState(["Rage", "Anti Aim", "General", "Key assignment", "Fake duck"]);
    var isHideshots = UI.GetValue(["Rage", "Exploits", "Keys", "Key assignment", "Hide shots"]);
    var sHideshots = UI.GetHotkeyState(["Rage", "Exploits", "Keys", "Key assignment", "Hide shots"]);
    var isSw = UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "Slow walk"]);
    var sSw = UI.GetHotkeyState(["Rage", "Anti Aim", "General", "Key assignment", "Slow walk"]);
    var isAP = UI.GetValue(["Misc.", "Keys", "General", "Key assignment", "Auto peek"]);
    var sAP = UI.GetHotkeyState(["Misc.", "Keys", "General", "Key assignment", "Auto peek"]);
    var isFB = UI.GetValue(["Rage", "General", "Key assignment", "Force body aim"]);
    var sFB = UI.GetHotkeyState(["Rage", "General", "Key assignment", "Force body aim"]);
    var isFS = UI.GetValue(["Rage", "General", "Key assignment", "Force safe point"]);
    var sFS = UI.GetHotkeyState(["Rage", "General", "Key assignment", "Force safe point"]);
    var alt_invert = UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "AA Direction inverter"]);
    var invert = UI.GetHotkeyState(["Rage", "Anti Aim", "General", "Key assignment", "AA Direction inverter"]);
    
    if(k_enabled){
    number = 0;
     Render.GradientRect(k_x, k_y + 20, 150, 2, 1, [rainbow_clr.r, rainbow_clr.g, rainbow_clr.b, 255], [rainbow_clr.b, rainbow_clr.r, rainbow_clr.g, 255]);
     Render.StringShadow(k_x + 20, k_y - 5, 0, "[Tokyo] Keybinds", [255, 255, 255, 255], fonts[1]);


     if(isDt == 1) {
         Render.StringShadow(k_x + 15, k_y + 21, 0, "Doubletap", [255, 255, 255, 255], fonts[2]);

         number += 1;

         if(sDt == "Always") {
             Render.StringShadow(k_x + 85, k_y + 21, 0, "[always]", [255, 255, 255, 255], fonts[2]);
         }
         if(sDt == "Toggle") {
             Render.StringShadow(k_x + 85, k_y + 21, 0, "[toggled]", [255, 255, 255, 255], fonts[2]);
         }
         if(sDt == "Hold") {
             Render.StringShadow(k_x + 85, k_y + 21, 0, "[holding]", [255, 255, 255, 255], fonts[2]);
         }
     }

     if(isHideshots == 1) {
         Render.StringShadow(k_x + 15, k_y + 21 + number * 17, 0, "Hide Shots", [255, 255, 255, 255], fonts[2]);

         if(sHideshots == "Always") {
             Render.StringShadow(k_x + 85, k_y + 21 + number * 17, 0, "[always]", [255, 255, 255, 255], fonts[2]);
         }
         if(sHideshots == "Toggle") {
             Render.StringShadow(k_x + 85, k_y + 21 + number * 17, 0, "[toggled]", [255, 255, 255, 255], fonts[2]);
         }
         if(sHideshots == "Hold") {
             Render.StringShadow(k_x + 85, k_y + 21 + number * 17, 0, "[holding]", [255, 255, 255, 255], fonts[2]);
         }
         number += 1;
     }

     if(isAP == 1) {
         Render.StringShadow(k_x + 15, k_y + 21 + number * 17, 0, "Auto Peek", [255, 255, 255, 255], fonts[2]);

         if(sAP == "Always") {
             Render.StringShadow(k_x + 85, k_y + 21 + number * 17, 0, "[always]", [255, 255, 255, 255], fonts[2]);
         }
         if(sAP == "Toggle") {
             Render.StringShadow(k_x + 85, k_y + 21 + number * 17, 0, "[toggled]", [255, 255, 255, 255], fonts[2]);
         }
         if(sAP == "Hold") {
             Render.StringShadow(k_x + 85, k_y + 21 + number * 17, 0, "[holding]", [255, 255, 255, 255], fonts[2]);
         }
         number += 1;
     }

     if(isSw == 1) {
         Render.StringShadow(k_x + 15, k_y + 21 + number * 17, 0, "Slow Walk", [255, 255, 255, 255], fonts[2]);

         if(sSw == "Always") {
             Render.StringShadow(k_x + 85, k_y + 21 + number * 17, 0, "[always]", [255, 255, 255, 255], fonts[2]);
         }
         if(sSw == "Toggle") {
             Render.StringShadow(k_x + 85, k_y + 21 + number * 17, 0, "[toggled]", [255, 255, 255, 255], fonts[2]);
         }
         if(sSw == "Hold") {
             Render.StringShadow(k_x + 85, k_y + 21 + number * 17, 0, "[holding]", [255, 255, 255, 255], fonts[2]);
         }
         number += 1;
     }

     if(isFd == 1) {
         Render.StringShadow(k_x + 15, k_y + 21 + number * 17, 0, "Fake Duck", [255, 255, 255, 255], fonts[2]);

         if(sFd == "Always") {
             Render.StringShadow(k_x + 85, k_y + 21 + number * 17, 0, "[always]", [255, 255, 255, 255], fonts[2]);
         }
         if(sFd == "Toggle") {
             Render.StringShadow(k_x + 85, k_y + 21 + number * 17, 0, "[toggled]", [255, 255, 255, 255], fonts[2]);
         }
         if(sFd == "Hold") {
             Render.StringShadow(k_x + 85, k_y + 21 + number * 17, 0, "[holding]", [255, 255, 255, 255], fonts[2]);
         }
         number += 1;
     }

     if(isFB == 1) {
         Render.StringShadow(k_x + 15, k_y + 21 + number * 17, 0, "Force Baim", [255, 255, 255, 255], fonts[2]);
         if(sFB == "Always") {
             Render.StringShadow(k_x + 85, k_y + 21 + number * 17, 0, "[always]", [255, 255, 255, 255], fonts[2]);
         }
         if(sFB == "Toggle") {
             Render.StringShadow(k_x + 85, k_y + 21 + number * 17, 0, "[toggled]", [255, 255, 255, 255], fonts[2]);
         }
         if(sFB == "Hold") {
             Render.StringShadow(k_x + 85, k_y + 21 + number * 17, 0, "[holding]", [255, 255, 255, 255], fonts[2]);
         }
         number += 1;
     }

     if(isFS == 1) {
         Render.StringShadow(k_x + 15, k_y + 21 + number * 17, 0, "Force Safe", [255, 255, 255, 255], fonts[2]);
         if(sFS == "Always") {
             Render.StringShadow(k_x + 85, k_y + 21 + number * 17, 0, "[always]", [255, 255, 255, 255], fonts[2]);
         }
         if(sFS == "Toggle") {
             Render.StringShadow(k_x + 85, k_y + 21 + number * 17, 0, "[toggled]", [255, 255, 255, 255], fonts[2]);
         }
         if(sFS == "Hold") {
             Render.StringShadow(k_x + 85, k_y + 21 + number * 17, 0, "[holding]", [255, 255, 255, 255], fonts[2]);
         }
         number += 1;
     }
     if(istDMG == 1) {
        Render.StringShadow(k_x + 15, k_y + 21 + number * 17, 0, "Min DMG", [255, 255, 255, 255], fonts[2]);

        if(tDMG == "Always") {
            Render.StringShadow(k_x + 85, k_y + 21 + number * 17, 0, "[always]", [255, 255, 255, 255], fonts[2]);
        }
        if(tDMG == "Toggle") {
            Render.StringShadow(k_x + 85, k_y + 21 + number * 17, 0, "[toggled]", [255, 255, 255, 255], fonts[2]);
        }
        if(tDMG == "Hold") {
            Render.StringShadow(k_x + 85, k_y + 21 + number * 17, 0, "[holding]", [255, 255, 255, 255], fonts[2]);
        }
        number += 1;
    }
     if(alt_invert == 1){
        Render.StringShadow(k_x + 15, k_y + 21 + number * 17, 0, "Inverter", [255, 255, 255, 255], fonts[2]);

        if(invert == "Always") {
            Render.StringShadow(k_x + 85, k_y + 21 + number * 17, 0, "[always]", [255, 255, 255, 255], fonts[2]);
        }
        if(invert == "Toggle") {
            Render.StringShadow(k_x + 85, k_y + 21 + number * 17, 0, "[toggled]", [255, 255, 255, 255], fonts[2]);
        }
        if(invert == "Hold") {
            Render.StringShadow(k_x + 85, k_y + 21 + number * 17, 0, "[holding]", [255, 255, 255, 255], fonts[2]);
        }
        number += 1;
     }
}

}

function red_createmove () {

    /* Variables */
    var rage_enabled = UI.GetValue(["Misc.", "[Redefined] Rage", "[Redefined] Rage", "[Redefined] Rage Enabled"]);

    /* Beginning */
    if(rage_enabled){
        
    }
}

}

/* Callbacks */{
Cheat.RegisterCallback(["Draw", "red_draw"]);
Cheat.RegisterCallback(["CreateMove", "red_createmove"]);
}