# getForwardMissile

**Description** goes here.

This page is automatically generated and not reviewed yet.<br>Remove this text if this page is fully reviewed.

## Code Information

- **Name**: `getForwardMissile`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 17 01`
- **Assembly Address in Memory** : `0x89299bc`

## Parameters

- `(int)Var0` *(8 bytes)*
- `(int)Var1` *(8 bytes)*
- `(float)Var2` *(8 bytes)*

## Example

Here is one example in hex:

```25 16 17 01 / 08 00 00 00 / 65 00 00 00 / 04 00 00 00 / 00 00 00 00 / 20 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
getForwardMissile(((global)int *)giVar101, (int *)iVar0, (float *)fVar0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089299bc(int param_1,undefined4 param_2)

{
  int *piVar1;
  int *piVar2;
  float *pfVar3;
  int *piVar4;
  int iVar5;
  int iVar6;
  uint uVar7;
  uint *puVar8;
  int iVar9;
  int iVar10;
  int iVar11;
  float fVar12;
  float fVar13;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  pfVar3 = (float *)Pac_Get_Param(param_2,2,1,4);
  *piVar2 = -1;
  *pfVar3 = 0.0;
  if (*piVar1 == 0) {
    iVar11 = 0;
  }
  else {
    iVar11 = 1;
    if (*piVar1 != 1) {
      iVar11 = 4;
    }
  }
  if ((iVar11 != 4) && (iVar6 = *(int *)(*(int *)(param_1 + 0x10) + 0x108), iVar6 != 0)) {
    puVar8 = *(uint **)(iVar6 + 0x1334);
    fVar13 = -1.0;
    iVar10 = -1;
    if ((*(uint *)(iVar6 + 0x1338) ^ puVar8[2] |
        *(uint *)(iVar6 + 0x1330) ^ *puVar8 | *(uint *)(iVar6 + 0x1334) ^ puVar8[1]) != 0) {
      piVar4 = (int *)puVar8[2];
      while( true ) {
        iVar9 = *piVar4;
        if ((((((iVar9 != 0) && (*(char *)(iVar9 + 0x9c) != '\0')) &&
              (*piVar1 == (int)*(char *)(iVar9 + 0x98))) &&
             ((*(char *)(iVar9 + 0x98) != 4 && (*(int *)(iVar9 + 0x20c) != 0)))) &&
            ((iVar5 = *(int *)(*(int *)(iVar9 + 0x20c) + 0x14), iVar5 != 0 &&
             (((iVar5 = *(int *)(iVar5 + 0x18), iVar5 == 0x220 || (iVar5 == 0x221)) ||
              (iVar5 == 0x21e)))))) && (iVar5 = FUN_088ce294(iVar9,0), iVar5 != 0)) {
          fVar12 = *(float *)(*(int *)(iVar9 + 200) + 0xc0);
          if (iVar10 == -1) {
            iVar10 = (int)*(short *)(iVar9 + 0x78);
            fVar13 = fVar12;
          }
          else if (iVar11 == 0) {
            if (fVar13 < fVar12) {
              iVar10 = (int)*(short *)(iVar9 + 0x78);
              fVar13 = fVar12;
            }
          }
          else if (fVar12 < fVar13) {
            iVar10 = (int)*(short *)(iVar9 + 0x78);
            fVar13 = fVar12;
          }
        }
        if (puVar8 == (uint *)0x0) {
          uVar7 = *(uint *)(iVar6 + 0x1334);
        }
        else {
          puVar8 = (uint *)puVar8[1];
          uVar7 = *(uint *)(iVar6 + 0x1334);
        }
        if ((*(uint *)(iVar6 + 0x1338) ^ puVar8[2] |
            *(uint *)(iVar6 + 0x1330) ^ *puVar8 | uVar7 ^ puVar8[1]) == 0) break;
        piVar4 = (int *)puVar8[2];
      }
    }
    *piVar2 = iVar10;
    *pfVar3 = fVar13;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

