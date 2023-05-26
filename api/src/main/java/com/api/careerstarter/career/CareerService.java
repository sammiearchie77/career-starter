package com.api.careerstarter.career;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;

@Service
public class CareerService {

	private final CareerRepository careerRepository;

	public CareerService(CareerRepository careerRepository){
		this.careerRepository = careerRepository;
	}

    public List<Career> getCareers(){
		return careerRepository.findAll();
	}

	public void addNewCareer(Career career){
		Optional <Career> careerOptional = careerRepository.findByTitle(career.getTitle());
		if(careerOptional.isPresent()){
			throw new IllegalStateException("Career already exist");
		}
		careerRepository.save(career);
	}

	public void deleteCareer(Long careerId){
		boolean exists = careerRepository.existsById(careerId);
		if (!exists) {
			throw new IllegalStateException(
				"Career with id " + careerId + " does not exist");
		}
		careerRepository.deleteById(careerId);
	}

	@Transactional
	public void updateCareer(Long careerId, String title, String description){
		final Career career = careerRepository.findById(careerId)
		.orElseThrow(() -> new IllegalStateException(
			"career with id " + careerId + " does not exist"
		));

		if (title != null && title.length() > 0 && !Objects.equals(career.getTitle(), title)){
			Optional<Career> careerOptional = careerRepository.findByTitle(title);

			if (careerOptional.isPresent()){
				throw new IllegalStateException("Career title exist!");
			}
			career.setTitle(title);
		}

		if (description != null && description.length() > 0 && !Objects.equals(career.getDescription(), description)){
			career.setDescription(description);
		}
	}
}
