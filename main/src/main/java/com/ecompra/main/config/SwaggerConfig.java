package com.ecompra.main.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;


import springfox.documentation.service.Contact;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@EnableSwagger2
@Configuration
public class SwaggerConfig {
	@Bean
	public Docket docket() {
		return new Docket(DocumentationType.SWAGGER_2)
		
		.select()
		.apis(RequestHandlerSelectors.basePackage
		("com.ecompra.main.controller"))
		.paths(PathSelectors.any())
		.build()
		.apiInfo(apiInfo());
		}
	private ApiInfo apiInfo() {
		return new ApiInfoBuilder()
				.title ("Ecompra")
				.description("API do Projeto Integrador Ecompra")
				.version ("1.0 - Pre-Alpha")
				.contact(contact())
				.build();
	}
	
	private Contact contact() {
		return new Contact("Ana, Matheus, Gato, Bruno, Allan",
				"https://ecompra.com",
				"Instrutor Primo");
				
				
	}
}
