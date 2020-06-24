package com.bpci.scheduler.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class PWAController {

    @RequestMapping("/{path:^(?!index\\.html|singup|oauth|api).+}/**")
    public String forward() {
        return "forward:/";
    }
}
