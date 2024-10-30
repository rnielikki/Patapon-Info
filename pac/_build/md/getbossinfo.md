# getBossInfo

Gets boss information, don't use this.

Called in `monster.pac` once. Patapon 3 original bosses don't use this.

## Code Information

- **Name**: `getBossInfo`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 21 10 00`
- **Assembly Address in Memory** : `0x89b1b5c`

## Parameters

- `(undefined4)Var0` *(8 bytes)*
- `(Undefined)Var1` *(8 bytes)*
- `(Undefined)Var2` *(8 bytes)*
- `(Undefined)Var3` *(8 bytes)*
- `(Undefined)Var4` *(8 bytes)*
- `(Undefined)Var5` *(8 bytes)*
- `(Undefined)Var6` *(8 bytes)*
- `(Undefined)Var7` *(8 bytes)*
- `(Undefined)Var8` *(8 bytes)*
- `(Undefined)Var9` *(8 bytes)*
- `(Undefined)Var10` *(8 bytes)*
- `(Undefined)Var11` *(8 bytes)*
- `(Undefined)Var12` *(8 bytes)*
- `(Undefined)Var13` *(8 bytes)*
- `(Undefined)Var14` *(8 bytes)*
- `(Undefined)Var15` *(8 bytes)*
- `(Undefined)Var16` *(8 bytes)*
- `(Undefined)Var17` *(8 bytes)*
- `(Undefined)Var18` *(8 bytes)*
- `(Undefined)Var19` *(8 bytes)*
- `(Undefined)Var20` *(8 bytes)*
- `(Undefined)Var21` *(8 bytes)*
- `(Undefined)Var22` *(8 bytes)*
- `(Undefined)Var23` *(8 bytes)*
- `(Undefined)Var24` *(8 bytes)*
- `(Undefined)Var25` *(8 bytes)*
- `(Undefined)Var26` *(8 bytes)*
- `(Undefined)Var27` *(8 bytes)*
- `(Undefined)Var28` *(8 bytes)*
- `(undefined4)Var29` *(8 bytes)*
- `(undefined4)Var30` *(8 bytes)*
- `(undefined4)Var31` *(8 bytes)*
- `(undefined4)Var32` *(8 bytes)*

## Example

Here is one example in hex:

```25 21 10 00 / 04 00 00 00 / 00 00 00 00 / 04 00 00 00 / 01 00 00 00 / 20 00 00 00 / 00 00 00 00 / 20 00 00 00 / 01 00 00 00 / 20 00 00 00 / 02 00 00 00 / 04 00 00 00 / 02 00 00 00 / 04 00 00 00 / 03 00 00 00 / 04 00 00 00 / 04 00 00 00 / 04 00 00 00 / 05 00 00 00 / 04 00 00 00 / 06 00 00 00 / 04 00 00 00 / 07 00 00 00 / 04 00 00 00 / 08 00 00 00 / 04 00 00 00 / 0d 00 00 00 / 04 00 00 00 / 0e 00 00 00 / 04 00 00 00 / 0f 00 00 00 / 20 00 00 00 / 03 00 00 00 / 20 00 00 00 / 04 00 00 00 / 20 00 00 00 / 05 00 00 00 / 20 00 00 00 / 06 00 00 00 / 04 00 00 00 / 0a 00 00 00 / 04 00 00 00 / 0b 00 00 00 / 20 00 00 00 / 07 00 00 00 / 20 00 00 00 / 08 00 00 00 / 20 00 00 00 / 09 00 00 00 / 20 00 00 00 / 0a 00 00 00 / 20 00 00 00 / 0b 00 00 00 / 20 00 00 00 / 0c 00 00 00 / 20 00 00 00 / 0d 00 00 00 / 04 00 00 00 / 0c 00 00 00 / 02 00 00 00 / 0a 0e 00 00 / 02 00 00 00 / 04 0e 00 00 / 02 00 00 00 / 18 0e 00 00 / 02 00 00 00 / 1b 0e 00 00```

Which is interpreted as:

```c
getBossInfo((int *)iVar0, (int *)iVar1, (float *)fVar0, (float *)fVar1, (float *)fVar2, (int *)iVar2, (int *)iVar3, (int *)iVar4, (int *)iVar5, (int *)iVar6, (int *)iVar7, (int *)iVar8, (int *)iVar13, (int *)iVar14, (int *)iVar15, (float *)fVar3, (float *)fVar4, (float *)fVar5, (float *)fVar6, (int *)iVar10, (int *)iVar11, (float *)fVar7, (float *)fVar8, (float *)fVar9, (float *)fVar10, (float *)fVar11, (float *)fVar12, (float *)fVar13, (int *)iVar12, (int)3594, (int)3588, (int)3608, (int)3611)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089b1b5c(undefined4 param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 uVar2;
  undefined4 uVar3;
  undefined4 uVar4;
  undefined4 uVar5;
  undefined4 uVar6;
  undefined4 uVar7;
  undefined4 uVar8;
  undefined4 uVar9;
  undefined4 uVar10;
  undefined4 uVar11;
  undefined4 uVar12;
  undefined4 uVar13;
  undefined4 uVar14;
  undefined4 uVar15;
  undefined4 uVar16;
  undefined4 uVar17;
  undefined4 uVar18;
  undefined4 uVar19;
  undefined4 uVar20;
  undefined4 uVar21;
  undefined4 uVar22;
  undefined4 uVar23;
  undefined4 uVar24;
  undefined4 uVar25;
  undefined4 uVar26;
  undefined4 uVar27;
  undefined4 uVar28;
  undefined4 uVar29;
  undefined4 *puVar30;
  undefined4 *puVar31;
  undefined4 *puVar32;
  undefined4 *puVar33;
  int iVar34;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  uVar2 = Pac_Get_Param(param_2,1,1,4);
  uVar3 = Pac_Get_Param(param_2,2,1,4);
  uVar4 = Pac_Get_Param(param_2,3,1,4);
  uVar5 = Pac_Get_Param(param_2,4,1,4);
  uVar6 = Pac_Get_Param(param_2,5,1,4);
  uVar7 = Pac_Get_Param(param_2,6,1,4);
  uVar8 = Pac_Get_Param(param_2,7,1,4);
  uVar9 = Pac_Get_Param(param_2,8,1,4);
  uVar10 = Pac_Get_Param(param_2,9,1,4);
  uVar11 = Pac_Get_Param(param_2,10,1,4);
  uVar12 = Pac_Get_Param(param_2,0xb,1,4);
  uVar13 = Pac_Get_Param(param_2,0xc,1,4);
  uVar14 = Pac_Get_Param(param_2,0xd,1,4);
  uVar15 = Pac_Get_Param(param_2,0xe,1,4);
  uVar16 = Pac_Get_Param(param_2,0xf,1,4);
  uVar17 = Pac_Get_Param(param_2,0x10,1,4);
  uVar18 = Pac_Get_Param(param_2,0x11,1,4);
  uVar19 = Pac_Get_Param(param_2,0x12,1,4);
  uVar20 = Pac_Get_Param(param_2,0x13,1,4);
  uVar21 = Pac_Get_Param(param_2,0x14,1,4);
  uVar22 = Pac_Get_Param(param_2,0x15,1,4);
  uVar23 = Pac_Get_Param(param_2,0x16,1,4);
  uVar24 = Pac_Get_Param(param_2,0x17,1,4);
  uVar25 = Pac_Get_Param(param_2,0x18,1,4);
  uVar26 = Pac_Get_Param(param_2,0x19,1,4);
  uVar27 = Pac_Get_Param(param_2,0x1a,1,4);
  uVar28 = Pac_Get_Param(param_2,0x1b,1,4);
  uVar29 = Pac_Get_Param(param_2,0x1c,1,4);
  puVar30 = (undefined4 *)Pac_Get_Param(param_2,0x1d,1,4);
  puVar31 = (undefined4 *)Pac_Get_Param(param_2,0x1e,1,4);
  puVar32 = (undefined4 *)Pac_Get_Param(param_2,0x1f,1,4);
  puVar33 = (undefined4 *)Pac_Get_Param(param_2,0x20,1,4);
  iVar34 = Is_Valid_SquadHandle(param_1,*puVar1);
  if (iVar34 != 0) {
    Boss::Save_BossAction
              (iVar34,uVar2,uVar3,uVar4,uVar5,uVar6,uVar7,uVar8,uVar9,uVar10,uVar11,uVar12,uVar13,
               uVar14,uVar15,uVar16,uVar17,uVar18,uVar19,uVar20,uVar21,uVar22,uVar23,uVar24,uVar25,
               uVar26,uVar27,uVar28,uVar29,*puVar30,*puVar31,*puVar32,*puVar33);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

