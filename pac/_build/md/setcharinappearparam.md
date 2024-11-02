# setCharinAppearParam

Defines Ka-ching drop information.

Ka-ching is *Charing* in Japanese version.

## Code Information

- **Name**: `setCharinAppearParam`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 08 08 00`
- **Assembly Address in Memory** : `0x896e9a8`

## Parameters

- `(int)min_kaching_particle` *(8 bytes)* : Min visual coin amount of Ka-ching.
- `(int)max_kaching_particle` *(8 bytes)* : Max visual coin amount of Ka-ching.
- `(int)min_kaching_amount` *(8 bytes)* : Minimum Ka-ching amount **per particle (coin)**.
- `(int)max_kaching_amount` *(8 bytes)* : Maximum Ka-ching amount **per particle (coin)**.
- `(float)fade_time` *(8 bytes)* : Time before fading out, as seconds.
- `(float)kill_time` *(8 bytes)* : Time before the item is deleted from the map, as seconds.

If Ka-ching amount is set to too big value, the Ka-ching doesn't drop at all.

## Example

Here is one example in hex:

```25 08 08 00 / 02 00 00 00 / 04 00 00 00 / 02 00 00 00 / 0a 00 00 00 / 08 00 00 00 / 60 00 00 00 / 08 00 00 00 / 32 00 00 00 / 10 00 00 00 / 00 00 80 41 / 10 00 00 00 / 00 00 f0 41```

Which is interpreted as:

```c
setCharinAppearParam((int)4, (int)10, ((global)int *)giVar96, ((global)int *)giVar50, (float)16, (float)30)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0896e9a8(int param_1,undefined4 param_2)

{
  undefined4 *puVar1;
  undefined4 *puVar2;
  undefined4 *puVar3;
  undefined4 *puVar4;
  undefined4 *puVar5;
  undefined4 *puVar6;
  int iVar7;
  
  puVar1 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,1,1,4);
  puVar3 = (undefined4 *)Pac_Get_Param(param_2,2,1,4);
  puVar4 = (undefined4 *)Pac_Get_Param(param_2,3,1,4);
  puVar5 = (undefined4 *)Pac_Get_Param(param_2,4,1,4);
  puVar6 = (undefined4 *)Pac_Get_Param(param_2,5,1,4);
  iVar7 = *(int *)(param_1 + 0x10);
  if (iVar7 == 0) {
    iVar7 = 0;
  }
  else {
    if (iVar7 == 0) {
      iVar7 = 0;
    }
    iVar7 = *(int *)(iVar7 + 0x188);
    if (iVar7 == 0) {
      iVar7 = 0;
    }
  }
  if (iVar7 != 0) {
    FUN_08953250(*puVar5,*puVar6,iVar7,*puVar1,*puVar2,*puVar3,*puVar4);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

