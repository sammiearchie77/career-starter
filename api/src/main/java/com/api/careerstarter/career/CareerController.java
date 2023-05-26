package com.api.careerstarter.career;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PutMapping;


@RestController
@RequestMapping(path = "api/v1/careers")
public class CareerController {

    private final CareerService careerService;

    public CareerController(CareerService careerService) {
        this.careerService = careerService;
    }

    @GetMapping
    public List<Career> getCareers(){
		return careerService.getCareers();
	}

    /**
     * @param career
     */
    @PostMapping
    public void registerNewCareer(@RequestBody Career career){
        careerService.addNewCareer(career);
    }

    @DeleteMapping(path = "{careerId}")
    public void deleteCareer(@PathVariable("careerId") Long careerId){
        careerService.deleteCareer(careerId);
    }

    /**
     * @param careerId
     * @param title
     * @param description
     */
    @PutMapping(value="{careerId}")
    public void updateCareer(@PathVariable("careerId") Long careerId,
        @RequestParam(required = false) String title,
        @RequestParam(required = false) String description) {
        careerService.updateCareer(careerId, title, description);
    }
}
