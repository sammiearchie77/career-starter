package com.api.careerstarter.career;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class CareerWebController {
    /**
     * @return
     */
    @RequestMapping(path = "/index")
    public String index(){
        return "index";
    }
}
