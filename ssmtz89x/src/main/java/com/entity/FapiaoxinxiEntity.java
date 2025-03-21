package com.entity;

import com.baomidou.mybatisplus.annotations.TableId;
import com.baomidou.mybatisplus.annotations.TableName;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.lang.reflect.InvocationTargetException;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import org.springframework.format.annotation.DateTimeFormat;
import com.fasterxml.jackson.annotation.JsonFormat;
import org.apache.commons.beanutils.BeanUtils;
import com.baomidou.mybatisplus.annotations.TableField;
import com.baomidou.mybatisplus.enums.FieldFill;
import com.baomidou.mybatisplus.enums.IdType;


/**
 * 发票信息
 * 数据库通用操作实体类（普通增删改查）
 * @author 
 * @email 
 * @date 2022-04-25 11:58:05
 */
@TableName("fapiaoxinxi")
public class FapiaoxinxiEntity<T> implements Serializable {
	private static final long serialVersionUID = 1L;


	public FapiaoxinxiEntity() {
		
	}
	
	public FapiaoxinxiEntity(T t) {
		try {
			BeanUtils.copyProperties(this, t);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	/**
	 * 主键id
	 */
	@TableId
	private Long id;
	/**
	 * 发票名称
	 */
					
	private String fapiaomingcheng;
	
	/**
	 * 药品名称
	 */
					
	private String yaopinmingcheng;
	
	/**
	 * 药品分类
	 */
					
	private String yaopinfenlei;
	
	/**
	 * 购买数量
	 */
					
	private Integer goumaishuliang;
	
	/**
	 * 购买金额
	 */
					
	private Integer goumaijine;
	
	/**
	 * 发票类型
	 */
					
	private String fapiaoleixing;
	
	/**
	 * 发票图片
	 */
					
	private String fapiaotupian;
	
	/**
	 * 账号
	 */
					
	private String zhanghao;
	
	/**
	 * 姓名
	 */
					
	private String xingming;
	
	/**
	 * 手机号码
	 */
					
	private String shoujihaoma;
	
	/**
	 * 识别号
	 */
					
	private String shibiehao;
	
	/**
	 * 地址
	 */
					
	private String dizhi;
	
	/**
	 * 商家账号
	 */
					
	private String shangjiazhanghao;
	
	/**
	 * 商家名称
	 */
					
	private String shangjiamingcheng;
	
	/**
	 * 开票日期
	 */
				
	@JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd")
	@DateTimeFormat 		
	private Date kaipiaoriqi;
	
	/**
	 * 用户id
	 */
					
	private Long userid;
	
	
	@JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
	@DateTimeFormat
	private Date addtime;

	public Date getAddtime() {
		return addtime;
	}
	public void setAddtime(Date addtime) {
		this.addtime = addtime;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	/**
	 * 设置：发票名称
	 */
	public void setFapiaomingcheng(String fapiaomingcheng) {
		this.fapiaomingcheng = fapiaomingcheng;
	}
	/**
	 * 获取：发票名称
	 */
	public String getFapiaomingcheng() {
		return fapiaomingcheng;
	}
	/**
	 * 设置：药品名称
	 */
	public void setYaopinmingcheng(String yaopinmingcheng) {
		this.yaopinmingcheng = yaopinmingcheng;
	}
	/**
	 * 获取：药品名称
	 */
	public String getYaopinmingcheng() {
		return yaopinmingcheng;
	}
	/**
	 * 设置：药品分类
	 */
	public void setYaopinfenlei(String yaopinfenlei) {
		this.yaopinfenlei = yaopinfenlei;
	}
	/**
	 * 获取：药品分类
	 */
	public String getYaopinfenlei() {
		return yaopinfenlei;
	}
	/**
	 * 设置：购买数量
	 */
	public void setGoumaishuliang(Integer goumaishuliang) {
		this.goumaishuliang = goumaishuliang;
	}
	/**
	 * 获取：购买数量
	 */
	public Integer getGoumaishuliang() {
		return goumaishuliang;
	}
	/**
	 * 设置：购买金额
	 */
	public void setGoumaijine(Integer goumaijine) {
		this.goumaijine = goumaijine;
	}
	/**
	 * 获取：购买金额
	 */
	public Integer getGoumaijine() {
		return goumaijine;
	}
	/**
	 * 设置：发票类型
	 */
	public void setFapiaoleixing(String fapiaoleixing) {
		this.fapiaoleixing = fapiaoleixing;
	}
	/**
	 * 获取：发票类型
	 */
	public String getFapiaoleixing() {
		return fapiaoleixing;
	}
	/**
	 * 设置：发票图片
	 */
	public void setFapiaotupian(String fapiaotupian) {
		this.fapiaotupian = fapiaotupian;
	}
	/**
	 * 获取：发票图片
	 */
	public String getFapiaotupian() {
		return fapiaotupian;
	}
	/**
	 * 设置：账号
	 */
	public void setZhanghao(String zhanghao) {
		this.zhanghao = zhanghao;
	}
	/**
	 * 获取：账号
	 */
	public String getZhanghao() {
		return zhanghao;
	}
	/**
	 * 设置：姓名
	 */
	public void setXingming(String xingming) {
		this.xingming = xingming;
	}
	/**
	 * 获取：姓名
	 */
	public String getXingming() {
		return xingming;
	}
	/**
	 * 设置：手机号码
	 */
	public void setShoujihaoma(String shoujihaoma) {
		this.shoujihaoma = shoujihaoma;
	}
	/**
	 * 获取：手机号码
	 */
	public String getShoujihaoma() {
		return shoujihaoma;
	}
	/**
	 * 设置：识别号
	 */
	public void setShibiehao(String shibiehao) {
		this.shibiehao = shibiehao;
	}
	/**
	 * 获取：识别号
	 */
	public String getShibiehao() {
		return shibiehao;
	}
	/**
	 * 设置：地址
	 */
	public void setDizhi(String dizhi) {
		this.dizhi = dizhi;
	}
	/**
	 * 获取：地址
	 */
	public String getDizhi() {
		return dizhi;
	}
	/**
	 * 设置：商家账号
	 */
	public void setShangjiazhanghao(String shangjiazhanghao) {
		this.shangjiazhanghao = shangjiazhanghao;
	}
	/**
	 * 获取：商家账号
	 */
	public String getShangjiazhanghao() {
		return shangjiazhanghao;
	}
	/**
	 * 设置：商家名称
	 */
	public void setShangjiamingcheng(String shangjiamingcheng) {
		this.shangjiamingcheng = shangjiamingcheng;
	}
	/**
	 * 获取：商家名称
	 */
	public String getShangjiamingcheng() {
		return shangjiamingcheng;
	}
	/**
	 * 设置：开票日期
	 */
	public void setKaipiaoriqi(Date kaipiaoriqi) {
		this.kaipiaoriqi = kaipiaoriqi;
	}
	/**
	 * 获取：开票日期
	 */
	public Date getKaipiaoriqi() {
		return kaipiaoriqi;
	}
	/**
	 * 设置：用户id
	 */
	public void setUserid(Long userid) {
		this.userid = userid;
	}
	/**
	 * 获取：用户id
	 */
	public Long getUserid() {
		return userid;
	}

}
