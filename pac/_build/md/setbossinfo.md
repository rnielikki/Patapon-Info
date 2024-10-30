# setBossInfo

Sets boss information, don't use this.

Called in `monster.pac` once. Patapon 3 original bosses don't use this.

## Code Information

- **Name**: `setBossInfo`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 21 12 00`
- **Assembly Address in Memory** : `0x89b1ff0`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(undefined4)Var1` *(8 bytes)*
- `(undefined4)Var2` *(8 bytes)*
- `(undefined4)Var3` *(8 bytes)*
- `(undefined4)Var4` *(8 bytes)*
- `(int)Var5` *(8 bytes)*
- `(undefined4)Var6` *(8 bytes)*
- `(undefined4)Var7` *(8 bytes)*
- `(undefined4)Var8` *(8 bytes)*
- `(undefined4)Var9` *(8 bytes)*
- `(undefined4)Var10` *(8 bytes)*
- `(undefined4)Var11` *(8 bytes)*
- `(undefined4)Var12` *(8 bytes)*
- `(undefined4)Var13` *(8 bytes)*
- `(int)Var14` *(8 bytes)*
- `(undefined4)Var15` *(8 bytes)*
- `(undefined4)Var16` *(8 bytes)*
- `(undefined4)Var17` *(8 bytes)*
- `(undefined4)Var18` *(8 bytes)*
- `(undefined4)Var19` *(8 bytes)*
- `(undefined4)Var20` *(8 bytes)*
- `(undefined4)Var21` *(8 bytes)*
- `(undefined4)Var22` *(8 bytes)*
- `(undefined4)Var23` *(8 bytes)*
- `(undefined4)Var24` *(8 bytes)*
- `(undefined4)Var25` *(8 bytes)*
- `(undefined4)Var26` *(8 bytes)*
- `(undefined4)Var27` *(8 bytes)*
- `(undefined4)Var28` *(8 bytes)*
- `(undefined4)Var29` *(8 bytes)*
- `(undefined4)Var30` *(8 bytes)*
- `(undefined4)Var31` *(8 bytes)*
- `(undefined4)Var32` *(8 bytes)*
- `(undefined4)Var33` *(8 bytes)*

## Example

Here is one example in hex:

```25 21 12 00 / 04 00 00 00 / 14 00 00 00 / 04 00 00 00 / 2a 00 00 00 / 20 00 00 00 / 29 00 00 00 / 20 00 00 00 / 2a 00 00 00 / 20 00 00 00 / 2b 00 00 00 / 04 00 00 00 / 28 00 00 00 / 04 00 00 00 / 29 00 00 00 / 04 00 00 00 / 20 00 00 00 / 04 00 00 00 / 1f 00 00 00 / 04 00 00 00 / 36 00 00 00 / 04 00 00 00 / 37 00 00 00 / 04 00 00 00 / 38 00 00 00 / 04 00 00 00 / 21 00 00 00 / 04 00 00 00 / 27 00 00 00 / 04 00 00 00 / 3a 00 00 00 / 20 00 00 00 / 2f 00 00 00 / 20 00 00 00 / 14 00 00 00 / 20 00 00 00 / 30 00 00 00 / 20 00 00 00 / 31 00 00 00 / 04 00 00 00 / 00 00 00 00 / 04 00 00 00 / 25 00 00 00 / 20 00 00 00 / 00 00 00 00 / 20 00 00 00 / 01 00 00 00 / 20 00 00 00 / 02 00 00 00 / 20 00 00 00 / 03 00 00 00 / 20 00 00 00 / 32 00 00 00 / 20 00 00 00 / 33 00 00 00 / 20 00 00 00 / 34 00 00 00 / 04 00 00 00 / 3b 00 00 00 / 04 00 00 00 / 31 00 00 00 / 02 00 00 00 / 0a 0e 00 00 / 02 00 00 00 / 04 0e 00 00 / 02 00 00 00 / 18 0e 00 00 / 02 00 00 00 / 1b 0e 00 00```

Which is interpreted as:

```c
setBossInfo((int *)iVar20, (int *)iVar42, (float *)fVar41, (float *)fVar42, (float *)fVar43, (int *)iVar40, (int *)iVar41, (int *)iVar32, (int *)iVar31, (int *)iVar54, (int *)iVar55, (int *)iVar56, (int *)iVar33, (int *)iVar39, (int *)iVar58, (float *)fVar47, (float *)fVar20, (float *)fVar48, (float *)fVar49, (int *)iVar0, (int *)iVar37, (float *)fVar0, (float *)fVar1, (float *)fVar2, (float *)fVar3, (float *)fVar50, (float *)fVar51, (float *)fVar52, (int *)iVar59, (int *)iVar49, (int)3594, (int)3588, (int)3608, (int)3611)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089b1ff0(undefined4 param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  undefined4 *puVar4;
  undefined4 *puVar5;
  int *piVar6;
  undefined4 *puVar7;
  undefined4 *puVar8;
  undefined4 *puVar9;
  undefined4 *puVar10;
  undefined4 *puVar11;
  undefined4 *puVar12;
  undefined4 *puVar13;
  undefined4 *puVar14;
  int *piVar15;
  undefined4 *puVar16;
  undefined4 *puVar17;
  undefined4 *puVar18;
  undefined4 *puVar19;
  undefined4 *puVar20;
  undefined4 *puVar21;
  undefined4 *puVar22;
  undefined4 *puVar23;
  undefined4 *puVar24;
  undefined4 *puVar25;
  undefined4 *puVar26;
  undefined4 *puVar27;
  undefined4 *puVar28;
  undefined4 *puVar29;
  undefined4 *puVar30;
  undefined4 *puVar31;
  undefined4 *puVar32;
  undefined4 *puVar33;
  undefined4 *puVar34;
  int iVar35;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  puVar4 = (undefined4 *)Pac_Get_Param(param_2,3,1,4);
  puVar5 = (undefined4 *)Pac_Get_Param(param_2,4,1,4);
  piVar6 = (int *)Pac_Get_Param(param_2,5,1,4);
  puVar7 = (undefined4 *)Pac_Get_Param(param_2,6,1,4);
  puVar8 = (undefined4 *)Pac_Get_Param(param_2,7,1,4);
  puVar9 = (undefined4 *)Pac_Get_Param(param_2,8,1,4);
  puVar10 = (undefined4 *)Pac_Get_Param(param_2,9,1,4);
  puVar11 = (undefined4 *)Pac_Get_Param(param_2,10,1,4);
  puVar12 = (undefined4 *)Pac_Get_Param(param_2,0xb,1,4);
  puVar13 = (undefined4 *)Pac_Get_Param(param_2,0xc,1,4);
  puVar14 = (undefined4 *)Pac_Get_Param(param_2,0xd,1,4);
  piVar15 = (int *)Pac_Get_Param(param_2,0xe,1,4);
  puVar16 = (undefined4 *)Pac_Get_Param(param_2,0xf,1,4);
  puVar17 = (undefined4 *)Pac_Get_Param(param_2,0x10,1,4);
  puVar18 = (undefined4 *)Pac_Get_Param(param_2,0x11,1,4);
  puVar19 = (undefined4 *)Pac_Get_Param(param_2,0x12,1,4);
  puVar20 = (undefined4 *)Pac_Get_Param(param_2,0x13,1,4);
  puVar21 = (undefined4 *)Pac_Get_Param(param_2,0x14,1,4);
  puVar22 = (undefined4 *)Pac_Get_Param(param_2,0x15,1,4);
  puVar23 = (undefined4 *)Pac_Get_Param(param_2,0x16,1,4);
  puVar24 = (undefined4 *)Pac_Get_Param(param_2,0x17,1,4);
  puVar25 = (undefined4 *)Pac_Get_Param(param_2,0x18,1,4);
  puVar26 = (undefined4 *)Pac_Get_Param(param_2,0x19,1,4);
  puVar27 = (undefined4 *)Pac_Get_Param(param_2,0x1a,1,4);
  puVar28 = (undefined4 *)Pac_Get_Param(param_2,0x1b,1,4);
  puVar29 = (undefined4 *)Pac_Get_Param(param_2,0x1c,1,4);
  puVar30 = (undefined4 *)Pac_Get_Param(param_2,0x1d,1,4);
  puVar31 = (undefined4 *)Pac_Get_Param(param_2,0x1e,1,4);
  puVar32 = (undefined4 *)Pac_Get_Param(param_2,0x1f,1,4);
  puVar33 = (undefined4 *)Pac_Get_Param(param_2,0x20,1,4);
  puVar34 = (undefined4 *)Pac_Get_Param(param_2,0x21,1,4);
  iVar35 = Is_Valid_SquadHandle(param_1,*puVar1);
  if (iVar35 != 0) {
    Boss::SetBossAction(*puVar3,*puVar4,*puVar5,*puVar16,*puVar17,*puVar18,*puVar19,*puVar22,iVar35,
                        *puVar2,*piVar6 != 0,*puVar7,*puVar8,*puVar9,*puVar10,*puVar11,*puVar12,
                        *puVar13,*puVar14,*piVar15 != 0,*puVar20,*puVar21,*puVar23,*puVar24,*puVar25
                        ,*puVar26,*puVar27,*puVar28,*puVar29,*puVar30,*puVar31,*puVar32,*puVar33,
                        *puVar34);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

