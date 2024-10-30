# requestActor

Gets *actor* of the certain *resources*, after loading **equipment, character, gimmick or effect** with [readArcFile](./readarcfile.md).

## Code Information

- **Name**: `requestActor`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 0a 17 00`
- **Assembly Address in Memory** : `0x894aab8`

## Parameters

- `(int)actor_type` *(8 bytes)* : Actor Type, 5 is Equipment, 9 is Character, A is Gimmick, and B is Effect.
- `(int)actor_id` *(8 bytes)* : ID of the actor.
   - `actor_type` 0x5: `weaponparam`
   - `actor_type` 0x9: `charaparam`
   - `actor_type`0xA: `gimmickparam`
   - `actor_type`0xB: `effectparam`
- `(undefined4)Var2` *(8 bytes)* : Keep as -1 if it is not a weapon. Otherwise keep 0.
- `(undefined4)Var3` *(8 bytes)* : Keep as -1 if it is not a weapon. Otherwise keep 0.

## Remarks

This is related to resource loading and does not create any object.

[Creating object](./setreqactortype.md) in [different mission phase](./setmissiontimmingscript.md) is required for making object instance.

## Example

Here is one example in hex:

```25 0a 17 00 / 02 00 00 00 / 0a 00 00 00 / 02 00 00 00 / b1 02 00 00 / 02 00 00 00 / ff ff ff ff / 02 00 00 00 / ff ff ff ff```

Which is interpreted as:

```c
requestActor((int)10, (int)689, (int)-1, (int)-1)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0894aab8(undefined4 param_1,undefined4 param_2)

{
  int *piVar1;
  undefined4 *puVar2;
  undefined4 uVar3;
  int iVar4;
  undefined2 *puVar5;
  int iVar6;
  undefined4 uVar7;
  undefined4 uVar8;
  int iVar9;
  undefined4 uVar10;
  undefined2 local_8;
  undefined2 local_6;
  undefined2 local_4;
  undefined2 local_2;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  iVar9 = *piVar1;
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  uVar10 = *puVar2;
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  uVar8 = *puVar2;
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,3,1,4);
  uVar7 = *puVar2;
  uVar3 = Save::Get_Save_BaseAddr(1);
  iVar4 = Save::Get_BaseAddr__0x78(uVar3,0);
  iVar6 = *(int *)(iVar4 + 0xa4);
  local_4 = (undefined2)uVar8;
  local_2 = (undefined2)uVar7;
  local_6 = (undefined2)uVar10;
  local_8 = (undefined2)iVar9;
  iVar4 = FUN_08a0ea54(iVar6,&local_8);
  if (iVar4 == 0) {
    if (iVar9 == 0xb) {
      iVar4 = *(int *)(iVar6 + 0x10888);
    }
    else {
      if (((iVar9 != 10) && (iVar9 != 5)) && (iVar9 != 9)) goto LAB_0894ac60;
      iVar4 = *(int *)(iVar6 + 0x10888);
    }
    if (iVar4 == 0x120) {
      iVar4 = *(int *)(iVar6 + 0x11194);
    }
    else {
      puVar5 = (undefined2 *)(*(int *)(iVar6 + 0x10884) + iVar4 * 8);
      if (puVar5 == (undefined2 *)0x0) {
        iVar4 = *(int *)(iVar6 + 0x10888);
      }
      else {
        *puVar5 = local_8;
        puVar5[1] = local_6;
        puVar5[2] = local_4;
        puVar5[3] = local_2;
        iVar4 = *(int *)(iVar6 + 0x10888);
      }
      *(int *)(iVar6 + 0x10888) = iVar4 + 1;
      iVar4 = *(int *)(iVar6 + 0x11194);
    }
    if (iVar4 != 0x120) {
      puVar5 = (undefined2 *)(*(int *)(iVar6 + 0x11190) + iVar4 * 8);
      if (puVar5 == (undefined2 *)0x0) {
        iVar4 = *(int *)(iVar6 + 0x11194);
      }
      else {
        *puVar5 = local_8;
        puVar5[1] = local_6;
        puVar5[2] = local_4;
        puVar5[3] = local_2;
        iVar4 = *(int *)(iVar6 + 0x11194);
      }
      *(int *)(iVar6 + 0x11194) = iVar4 + 1;
    }
  }
LAB_0894ac60:
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

